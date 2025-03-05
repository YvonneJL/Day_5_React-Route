import { Link } from "react-router-dom";

interface IProduct {
    url: string,
    title: string,
    link: string
}

const Product = (props: IProduct) => {
    return ( 
        <div className={`bg-[url('${props.url}')] w-70 h-100 bg-no-repeat p-5`}>
            <div className="flex flex-col h-full justify-between">
            <p className="font-bold text-font-black text-2xl">{props.title}</p>
            <Link className="bg-button-yellow text-white rounded py-3 px-4 self-end" to={props.link}>Shop Now</Link>
            </div>
        </div>
     );
}
 
export default Product;