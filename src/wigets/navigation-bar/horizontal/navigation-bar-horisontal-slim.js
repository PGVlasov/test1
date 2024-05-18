import { getClients, getOrders, getProducts, getSupport, getUser } from "../../../entites/api/api"
import logo from "./assets/Logo.png"
import avatar from './assets/Ellipse 2520.png'
import loogoLeft from './assets/Icon-left.png'
import menu from './assets/menu.png'
import { useState } from "react"

export const NavigationBarHoorisontalSlim = ({ setVerticalMenu }) => {
  const [horisontalMenuSlim, setHorisontalMenuSlim] = useState(true)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  const user = getUser()
  const orders = getOrders()
  const products = getProducts()
  const clients = getClients()
  const support = getSupport()

  const clickHandler = () => {
    setVerticalMenu(true)
  }

  const handleExpiredMenu = () => {
    setHorisontalMenuSlim(!horisontalMenuSlim)
  }


  return (<>
    <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 bg-indigo-600">
      <div className="relative flex h-16 items-center justify-between">
        <div className="inline-flex">
          <buttun className="flex h-16 shrink-0 items-center ml-3 cursor-pointer mr-4" onClick={handleExpiredMenu}>
            <img src={menu} alt="close" />
          </buttun>
          <div className="flex h-14 shrink-0 items-center mt-0.5">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex h-22 shrink-0 ml-4 items-center cursor-pointer" onClick={clickHandler}>
            <img src={loogoLeft} alt="top" />
          </div>
        </div>
        <div className="inline-flex ">
          <div className='w-64 h-11 inline-flex justify-between'>
            <img
              className="h-10 w-10 rounded-full bg-indigo-700 "
              src={avatar}
              alt=""
            />
            <div className='flex flex-col '>
              <span aria-hidden="true" className='text-white text-base'>{user.userName}</span>
              <span aria-hidden="true" className='text-white text-xs'>{user.userCompany}</span>
            </div>
            <div className='mt-2' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <div className='mt-2' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>

            </div>
            <div className='mt-2 cursor-pointer' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div >

    {horisontalMenuSlim
      &&
      <div className="mx-auto h-80 max-h-96 max-w-full px-2 bg-indigo-600 border-t border-b rounded-b-lg">
        <div className="inline-flex">
          <div className='mt-4 inline-flex' >
            <div className='opacity-30'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div className='ml-3 mt-1'>
              <div className="text-xs font-semibold leading-6 text-indigo-200 text-base text-neutral-50">{orders.header}</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {orders.items.map((item) => (
                  <li key={item.name}>
                    <span className="truncate underline text-white text-xs">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='mt-4 inline-flex ml-20'>
            <div className='opacity-30'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <div className='ml-3 mt-1'>
              <div className="text-xs font-semibold leading-6 text-indigo-200 text-base  text-neutral-50">{products.header}</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {products.items.map((item) => (
                  <li key={item.name}>
                    <span className="truncate underline text-white text-xs">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='mt-4 inline-flex ml-20 w-56 border-r'>
            <div className='opacity-30'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <div className='ml-3 mt-1'>
              <div className="text-xs font-semibold leading-6 text-indigo-200 text-base  text-neutral-50">{clients.header}</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {clients.items.map((item) => (
                  <li key={item.name}>
                    <span className="truncate underline text-white text-xs">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='mt-4 inline-flex ml-20'>
            <div className='opacity-30'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <div className='ml-3 mt-1'>
              <div className="text-xs font-semibold leading-6 text-indigo-200 text-base  text-neutral-50">{support.header}</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {support.items.map((item) => (
                  <li key={item.name}>
                    <span className="truncate underline text-white text-xs">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex">
          <div className="inline-flex ">
            <div className='opacity-30'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
              </svg>
            </div>
            <div className="text-white ml-4">Analytics / Reports</div>
          </div>
        </div>
      </div >}
  </>



  )
}