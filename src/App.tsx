import { BrowserRouter, Route, Routes } from "react-router-dom"
import Formulario from "./components/Formulario"
import Footer from "./components/Footer"
import { store } from "./redux/store"
import { Provider } from "react-redux"


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
              <Route path="/" element={<Formulario/>}/>
          </Routes>
              <Footer/>
        </Provider>
      </BrowserRouter>
      
    </>
  )
}

export default App
