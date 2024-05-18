import { useState } from "react"
import { NavigationBarVertical } from "./vertical/navigation-bar-vertical"
import { NavigationBarHoorisontal } from "./horizontal/navigation-bar-horisontal"

export const NavigationBar = () => {
  const [verticalMenu, setVerticalMenu] = useState(false)

  return (<>
    {verticalMenu ? <NavigationBarVertical setVerticalMenu={setVerticalMenu} /> : <NavigationBarHoorisontal setVerticalMenu={setVerticalMenu} />}
  </>)
}