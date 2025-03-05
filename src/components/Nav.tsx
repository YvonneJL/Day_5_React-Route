import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav className="flex justify-between mx-20 py-5 items-center">
            <div><img src="/Logo (2).png" alt="Logo Woodies" /></div>
            <div className="flex gap-20">
                <Link className="text-font-black opacity-75" to="home">Home</Link>
                <Link className="text-font-black opacity-75" to="aboutus">About Us</Link>
                <Link className="text-font-black opacity-75" to="products">Products</Link>
            </div>
        </nav>
     );
}
 
export default Nav;