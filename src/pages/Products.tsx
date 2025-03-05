import HeadLine from "../components/HeadLine";
import Product from "../components/Product";

const Products = () => {
    return ( 
        <section className="py-10 mx-25">
            <HeadLine intro="What we have" headline="PRODUCTS"/>
            <article className="flex justify-between py-10">
                <Product title="Jenson" url="/Tisch.png" link="jenson"/>
                <Product title="Deon" url="/Stuhl.png" link="deon"/>
                <Product title="Krisha" url="/Schuesseln.png" link="krisha"/>
            </article>
        </section>
     );
}
 
export default Products;