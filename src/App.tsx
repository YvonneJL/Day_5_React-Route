import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import Jenson2 from "./pages/Jenson2"
import Krisha2 from "./pages/Krisha2"
import Deon2 from "./pages/Deon2"

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="aboutus" element={<About/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="/products/jenson" element={<Jenson2/>}/>
      <Route path="/products/deon" element={<Deon2/>}/>
      <Route path="/products/krisha" element={<Krisha2/>}/>
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
