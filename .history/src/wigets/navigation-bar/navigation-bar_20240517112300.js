
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
            <div className="text-xs font-semibold leading-6 text-indigo-200 mt-10 text-base text-neutral-50">{orders.header}</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {orders.orders.map((order) => (
                <li key={order.name}>
                  <a
                    href={order.href}
                    className={classNames(
                      order.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <span className="truncate">{order.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-xs font-semibold leading-6 text-indigo-200 mt-10 text-base  text-neutral-50">{products.header}</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {products.products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className={classNames(
                      product.current
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <span className="truncate">{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-xs font-semibold leading-6 text-indigo-200 mt-10 text-base  text-neutral-50">{clients.header}</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {clients.clients.map((client) => (
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
                    <span className="truncate">{client.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// /* Order Management */

// position: absolute;
// left: 22.06 %;
// right: 30.88 %;
// top: 18.65 %;
// bottom: 79.2 %;

// font - family: 'Lato';
// font - style: normal;
// font - weight: 800;
// font - size: 18px;
// line - height: 22px;
// /* identical to box height */

// color: #FFFFFF;




