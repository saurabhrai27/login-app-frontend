import { createBrowserRouter,  RouterProvider} from "react-router-dom";

import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import UserName from "./components/UserName";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World!</h1>
  },
  {
    path: '/pagenotfound',
    element: <PageNotFound />
  },
  {
    path: '/password',
    element: <Password />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '/username',
    element: <UserName />
  }
])

function App() {
  

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
