import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section className="flex items-center justify-between px-25 py-5 relative">
            <div className="flex flex-col gap-3">
                <p className="text-3xl">Are you looking for <span className="font-bold">woodden <br/> furniture</span> for your place?</p>
                <h1 className="text-6xl font-bold leading-relaxed">This is the <br/> Right Place</h1>
                <Link className="bg-button-yellow text-white rounded py-3 px-4 self-start" to="categories">Explore Categories</Link>
            </div>
            <div>
                <img src="../../public/Home.png" alt="Tisch" />
            </div>
            <div className="absolute bg-background-pink w-120 h-screen -z-10 right-0 -top-19"></div>
        </section>
     );
}
 
export default Home;