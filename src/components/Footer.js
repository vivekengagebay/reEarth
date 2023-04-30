import Layout from "./Layout";

function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">

                {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">

                    
                    <div>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Plasticperks
                                </h6>
                                <p> Made with ♥️ in India.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    restore earth

                                </h6>

                                <p>
                                    <a href="/planetcare" className="text-reset text-decoration-none">Care for planet</a>
                                </p>
                                <p>
                                    <a href="/planttrees" className="text-reset text-decoration-none">Life for trees</a>
                                </p>
                                <p>
                                    <a href="/savesoil" className="text-reset text-decoration-none">Heal the soil</a>
                                </p>
                                <p>
                                    <a href="/pollutionfree" className="text-reset text-decoration-none">Pollution free earth</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Home</a>
                                </p>
                                <p>
                                    <a href="/recycle" className="text-reset text-decoration-none">Start recycle</a>
                                </p>
                                <p>
                                    <a href="/rewards" className="text-reset text-decoration-none">Rewards</a>
                                </p>
                                <p>
                                    <a href="/about-us" className="text-reset text-decoration-none">About us</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> Hyderabad, Telangana</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    wecareforpanet@Plasticperks.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 824-703-4033</p>
                                <p><i className="fas fa-print me-3 text-secondary"></i> + 91 779-929-3294</p>
                            </div>
                        </div>
                    </div>
                </section>



            </footer>
        </div>
    );
}

export default Footer;