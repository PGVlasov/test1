import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const orders = [
  { id: 1, name: 'Orders', href: '#', current: false },
  { id: 2, name: 'Jobs', href: '#', current: false },
  { id: 3, name: 'Invoice managment', href: '#', current: false },
]
const prodcts = [
  { id: 1, name: 'Products', href: '#', current: false },
  { id: 2, name: 'Product types', href: '#', current: false },
  { id: 3, name: 'Product catigories', href: '#', current: false },
  { id: 4, name: 'Inventory managment', href: '#', current: false },
]

const clients = [
  { id: 1, name: 'Employees', href: '#', current: false },
  { id: 2, name: 'Subcontractors', href: '#', current: false },
  { id: 3, name: 'Customers', href: '#', current: false },
  { id: 4, name: 'Timesbeets', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <>
      <div className="flex flex-col max-w-md">
        <nav className="flex flex-col max-w-md">
          <ul role="list">
            <li >
              <a
                href="#"
                className="flex flex-row items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-300 rounded-full"
              >
                <img
                  className="bg-indigo-200 rounded-full"
                  alt=""
                />
                <span aria-hidden="true" className='mr-10'>John Doe</span>
                <span aria-hidden="true">icon 1</span>
                <span aria-hidden="true">icon 2</span>
                <span aria-hidden="true">icon 3</span>
              </a>
            </li>
            <li>
              <div >Your teams</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {orders.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={classNames(
                        team.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-indigo-200">Prodct Managment</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {prodcts.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={classNames(
                        team.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-indigo-200">Client Managment</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {clients.map((client) => (
                  <li key={client.name}>
                    <a
                      href={client.href}
                      className={classNames(
                        client.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                        {client.initial}
                      </span>
                      <span className="truncate">{client.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App;
