import Footer from "./containers/Footer"
import Header from "./containers/Header"
import RestaurantsList from "./containers/RestaurantsList"
import { GlobalStyle } from "./styles"

function App() {

  return (
    <>
      <GlobalStyle />
        <Header />
        <RestaurantsList />
        <Footer />
    </>
  )
}

export default App
