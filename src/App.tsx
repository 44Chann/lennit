import { Outlet } from "react-router-dom"
import { ArticleCard, Feed, Navbar, Tabs } from "."

const App = () => {
  return (
    <div className="container m-auto mb-52 ">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
