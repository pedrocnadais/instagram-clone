import SidebarCreatePost from "./SidebarCreatePost"
import SidebarHome from "./SidebarHome"
import SidebarNotifications from "./SidebarNotifications"
import SidebarProfileLink from "./SidebarProfileLink"
import SidebarSearch from "./SidebarSearch"

const SidebarItems = () => {
  return (
   <>
    <SidebarHome />
    <SidebarSearch />
    <SidebarNotifications />
    <SidebarCreatePost />
    <SidebarProfileLink />
   </>
  )
}

export default SidebarItems