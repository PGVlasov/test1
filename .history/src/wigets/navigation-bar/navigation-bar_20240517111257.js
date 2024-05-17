
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { getClients, getOrders, getProducts, getUser } from '../../entites/api/api'
import logo from "./assets/Logo.png"
import avatar from './assets/Ellipse 2520.png'




export const NavigationBar = () => {
  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  const orders = getOrders()
  const products = getProducts()
  const clients = getClients()
  const user = getUser()


  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="flex flex-col overflow-y-auto bg-indigo-600 px-6 max-w-80">
      <div className="flex h-16 shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="-mx-6 mt-auto inline-flex">
        <img
          className="h-8 w-8 rounded-full bg-indigo-700"
          src={avatar}
          alt=""
        />
        <span className="sr-only">{user.name}</span>
        <span aria-hidden="true">{user.name}</span>

      </div>
      <nav className="flex flex-1 flex-col mt-5">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">

          <li>
            <div className="text-xs font-semibold leading-6 text-indigo-200">{orders.header}</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {orders.orders.map((order) => (
                <li key={order.name}>

                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}




