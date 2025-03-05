import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Jenson from "./pages/Jenson"
import Deon from "./pages/Deon"
import Krisha from "./pages/Krisha"
import NotFound from "./pages/NotFound"

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="aboutus" element={<About/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="/products/jenson" element={<Jenson/>}/>
      <Route path="/products/deon" element={<Deon/>}/>
      <Route path="/products/krisha" element={<Krisha/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
    
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
