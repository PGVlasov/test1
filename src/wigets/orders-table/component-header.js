import advanced from './assets/Frame.png'

export const TableHeader = () => {
  return (<div className="flex flex-row h-10 bg-white justify-between">
    <div className="flex flex-row">
      <div className=" min-w-28 pt-1.5"><span className="ml-5">Orders List</span></div>
      <div className="flex flex-row w-52">
        <input
          type="search"
          name="search"
          id="search"
          className="block w-52 border-none outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-purple-300 pl-[10px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
        <div className="pt-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex flex-row ml-8">
        <div className="flex h-16 shrink-0 items-center">
          <img src={advanced} alt="logo" />
        </div>
        <div>
          <span className='text-purple-300'>Advanced</span>
        </div>
      </div>
    </div >
    <div>
      <div className='flex flex-row mr-8'>
        <select
          id="location"
          name="location"
          className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <div className='pt-1.5 ml-2'>
          <span>+</span>
          <span>Create</span>
        </div>
      </div>

    </div>
  </div >)
}