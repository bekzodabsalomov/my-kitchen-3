//rrd
import { createBrowserRouter , RouterProvider  } from "react-router-dom"
//layout
import RootLayout from "./layout/RootLayout"

//pages
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App