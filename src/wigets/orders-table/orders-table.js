import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import {
  keepPreviousData,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { useVirtualizer } from '@tanstack/react-virtual'

import { fetchData, Person, PersonApiResponse } from './makeData'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import avatar from './assets/avatar.png'
import { TableHeader } from './component-header'

const fetchSize = 50

export const Table = () => {
  //we need a reference to the scrolling element for logic down below
  const tableContainerRef = useRef(null)

  const [sorting, setSorting] = useState([])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'avatar',
        header: 'Avatar',
        size: 80,
        cell: () => <div className="flex pl-2 h-8 shrink-0 items-center">
          <img src={avatar} alt="avatar" />
        </div>
      },
      {
        accessorKey: 'enabled',
        header: 'Enabled',
        size: 90,
        cell: () => <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
        </div>
      },
      {
        accessorFn: row => row.lastName,
        id: 'userName',
        cell: () => <span>IronMan</span>,
        header: () => <span>User name</span>,
        size: 260,
      },
      {
        accessorKey: 'email',
        header: () => 'Email',
        cell: () => <span>John.Doe@gmail.com</span>,
        size: 280,
        onClick: () => { console.log("email cliched") }
      },
      {
        accessorKey: 'visits',
        header: () => <span>First Name</span>,
        size: 180,
        cell: () => <span>John</span>,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Last Name</span>,
        size: 180,
        cell: () => <span>Doe</span>,
      },
      {
        accessorKey: 'visits',
        header: () => <div className='h-30'><span>Phone</span></div>,
        size: 230,
        height: 540,
        cell: () => <span>Phone</span>,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Client Name</span>,
        size: 168,
        cell: () => <span>John.Doe@gmail.com</span>,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Client Name</span>,
        size: 168,
        cell: () => <span>John.Doe@gmail.com</span>,
      },
      {
        accessorKey: 'visits',
        header: () => <span>Client Name</span>,
        size: 168,
        cell: () => <span>John.Doe@gmail.com</span>,
      },
    ],
    []
  )

  //react-query has a useInfiniteQuery hook that is perfect for this use case
  const { data, fetchNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: [
        'people',
        sorting, //refetch when sorting changes
      ],
      queryFn: async ({ pageParam = 0 }) => {
        const start = (pageParam) * fetchSize
        const fetchedData = await fetchData(start, fetchSize, sorting) //pretend api call
        return fetchedData
      },
      initialPageParam: 0,
      getNextPageParam: (_lastGroup, groups) => groups.length,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    })

  //flatten the array of arrays from the useInfiniteQuery hook
  const flatData = useMemo(
    () => data?.pages?.flatMap(page => page.data) ?? [],
    [data]
  )
  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0
  const totalFetched = flatData.length

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        //once the user has scrolled within 500px of the bottom of the table, fetch more data if we can
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  )

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [fetchMoreOnBottomReached])

  const table = useReactTable({
    data: flatData,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    debugTable: true,
  })

  //scroll to top of table when sorting changes
  const handleSortingChange = updater => {
    setSorting(updater)
    if (!!table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0)
    }
  }

  //since this table option is derived from table row model state, we're using the table.setOptions utility
  table.setOptions(prev => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }))

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
        navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <div className="ml-5">
      <div
        className="container"
        onScroll={e => fetchMoreOnBottomReached(e.target)}
        ref={tableContainerRef}
        style={{
          overflow: 'auto', //our scrollable table container
          position: 'relative', //needed for sticky header
          height: '600px', //should be a fixed height
        }}
      >
        <TableHeader />
        {/* Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights */}
        <table style={{ display: 'grid' }}>
          <thead
            style={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <tr
                key={headerGroup.id}
                style={{ display: 'flex', width: '100%', height: "54px", border: "1px solid #bbbbbb", backgroundColor: "#E9E9F4" }}
              >
                {headerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      style={{
                        display: 'flex',
                        width: header.getSize(),
                      }}
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: 'relative', //needed for absolute positioning of rows
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index]
              return (
                <tr
                  data-index={virtualRow.index} //needed for dynamic row height measurement
                  ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
                  key={row.id}
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                    width: '100%',
                    height: "45px"
                  }}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                          border: "1px solid #bbbbbb"
                        }}

                        onClick={() => { console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ") }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {isFetching && <div>Fetching More...</div>}
    </div>
  )
}
