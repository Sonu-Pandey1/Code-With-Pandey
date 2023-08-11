

export default function Footer({ mode }) {
    return (
        <>
            <div className="container-fulid">
                <div className="row m-0">
                    <div className="col">
                        <section className="sectionFooter  ">
                            <div className="copyright">
                                <div className={`innerparentdiv${mode === true ? "1" : ""}`}>
                                    <p>© <a href="#"> CodeWithPandey </a>, All Right Reserved. Designed By <a href="#"> Sonu
                                        Pandey</a></p>
                                    <ul className="innerparentdivul">
                                        <li>Home</li>
                                        <li>Cookies</li>
                                        <li>Help</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}