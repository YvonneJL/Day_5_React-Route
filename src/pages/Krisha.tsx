import HeadLine from "../components/HeadLine";

const Krisha = () => {
    return ( 
        <section className="py-10 mx-25">
            <HeadLine intro="Krisha" headline="PRODUCTS"/>
            <article className="flex items-center justify-between my-10 ml-20 gap-40">
                <img src="../../public/Schuesseln.png" alt="Tisch" />

                <p className="font-bold text-3xl leading-relaxed">Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.</p>

            </article>
        </section>
     );
}
 
export default Krisha;