import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'

const Router = () => {

  const routes = [{
    element: <App />,
    children: []
  }]

  const router = createBrowserRouter(routes, {})

  return (
    <RouterProvider router={router} />
  )
}

export default Router