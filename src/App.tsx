/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles"
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  // const routes = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: (
  //       <Home />
  //     )
  //   },
  //   {
  //     path: `/restaurante/1`,
  //     // path: '/restaurante',
  //     element: (
  //       <Profile />
  //     )
  //   },
  //   {
  //     path: `/restaurante/2`,
  //     // path: '/restaurante',
  //     element: (
  //       <Profile />
  //     )
  //   },
  //   {
  //     path: `/restaurante/3`,
  //     // path: '/restaurante',
  //     element: (
  //       <Profile />
  //     )
  //   },
  //   {
  //     path: `/restaurante/4`,
  //     // path: '/restaurante',
  //     element: (
  //       <Profile />
  //     )
  //   },
  //   {
  //     path: `/restaurante/5`,
  //     // path: '/restaurante',
  //     element: (
  //       <Profile />
  //     )
  //   }
  // ])

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle />
            <Rotas />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
