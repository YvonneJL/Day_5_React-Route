import HeadLine from "../components/HeadLine";

const About = () => {
    return ( 
        <section className="py-10 mx-25">
            <HeadLine intro="Who we are" headline="ABOUT US"/>
            <article className="flex items-center justify-between my-10">
                <img src="../../public/About.png" alt="Schüsseln, gefüllt mit Salat" />
                <div className="flex flex-col gap-5">
                <h3 className="text-5xl leading-relaxed"><span className="font-bold ">WOODIES</span> is the <span className="font-bold ">home of<br/> modern wooden furniture</span></h3>
                <p className="font-bold text-3xl leading-relaxed">the answer to your need for furniture <br/> with shapes, sizes and colors.</p>
                </div>
            </article>
        </section>
     );
}
 
export default About;