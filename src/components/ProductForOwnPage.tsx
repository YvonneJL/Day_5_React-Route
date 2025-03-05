import HeadLine from "./HeadLine";

type ProductAndHeadline = {
    headline: string,
    intro: string,
    imgUrl: string,
    desc: string
  }

//Frage: wollte Jenson und co auch als Komponente machen
//dann hätte ich in Headline hier aber auch Variablen einfügen müssen-->geht das?
//dann müsste ich bei Jenson diese props die ich hier in die Headline reinhabe ja auch in <ProductForOwnPage> rein packen
const ProductForOwnPage = (props: ProductAndHeadline) => {
    return ( 
        <section className="py-10 mx-25">
        <HeadLine headline={props.headline} intro={props.intro}/>
        <article className="flex items-center justify-between my-10 ml-20 gap-40">
            <img src={props.imgUrl} alt="Möbelstück" />

            <p className="font-bold text-3xl leading-relaxed">{props.desc}</p>

        </article>
    </section>
     );
}
 
export default ProductForOwnPage;