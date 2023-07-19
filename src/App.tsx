import Footer from "./containers/Footer"
import Header from "./containers/Header"
import Profile from "./containers/Profile"
import RestaurantsList from "./containers/RestaurantsList"
import { GlobalStyle } from "./styles"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
        <Header />
        <RestaurantsList />
        <Footer />
        </>
      )
    },
    {
      path: '/restaurante',
      element: (
        <Profile />
      )
    }
  ])

  return (
    <>
      <GlobalStyle />
        <RouterProvider router={routes} />
    </>
  )
}

export default App
