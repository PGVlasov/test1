import logo from "./assets/Open button.png"

export const NavigationBarVerticalSlim = ({ setExpanded }) => {

  const clickHandler = () => {
    setExpanded(false)
  }

  return (
    <div className="flex flex-col overflow-y-auto bg-indigo-600 px-3 max-w-20 h-dvh">
      <div className='inline-flex justify-between px-2'>
        <div className="flex h-16 shrink-0 items-center cursor-pointer" onClick={clickHandler}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <nav className="flex flex-1 flex-col mt-28">
        <div className="flex flex-col gap-y-7 justify-center items-center">
          <div className="text-white">
            Orders
          </div>
          <div className="text-white">
            Clients
          </div>
          <div className="text-white">
            Products
          </div>
        </div>
      </nav>
    </div>
  )
}




