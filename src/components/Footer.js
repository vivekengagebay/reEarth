function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
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
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>GOEarth
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Laravel</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Home</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Login</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Signup</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">About us</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>



            </footer>
        </div>
    );
}

export default Footer;