const Footer = () => {
    return ( 
    <footer className="bg-footer-grey flex justify-between pl-25">
        <article className="flex flex-col gap-5 pt-15">
        <div className="bg-line-footer w-full h-[2px]"></div>
            <div>
                <img src="/Logo (2).png" alt="Logo Woodies" />
            </div>
            <p className="text-font-black opacity-75">(012) 8967453</p>
            <p className="text-font-black opacity-75">woodies@gmail.com</p>
            <p className="text-font-black opacity-75">Jakarta, Indonesia</p>
        <p className="text-font-black opacity-75 self-center ml-140 py-5">© 2020 WOODIES</p>
        </article>
        <article className="self-end">
        <img src="/Footer.png" alt="Schreibtisch mit Stuhl" />
        </article>
    </footer> 
);
}
 
export default Footer;