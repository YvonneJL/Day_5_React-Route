type Headline = {
    headline: string,
    intro: string
  }

const HeadLine = (props: Headline) => {


    return ( 
        <article className="flex items-center gap-1 justify-center">
        <h2 className="font-bold text-5xl">{props.intro}</h2>
        <div className="bg-black flex-1 h-[2px]"></div>
        <h1 className="text-font-black opacity-10 font-bold text-8xl">{props.headline}</h1>
    </article>
     );
}
 
export default HeadLine;