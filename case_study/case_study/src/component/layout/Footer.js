export default function Footer() {
    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-light footer wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4">
                            <div className="bg-primary rounded p-4">
                                <a href="index.html">
                                    <h1 className="text-white text-uppercase mb-3">Furama</h1>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                Contact
                            </h6>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3"/>
                                290 Tran Hung Dao, Son Tra, Da Nang
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3"/>
                                0778298955
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3"/>
                                vovantin9502@gmail.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-youtube"/>
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="row gy-5 g-4">
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                        Company
                                    </h6>
                                    <a className="btn btn-link" href="">
                                        About Us
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Contact Us
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Privacy Policy
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Terms &amp; Condition
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Support
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                                        Services
                                    </h6>
                                    <a className="btn btn-link" href="">
                                        Food &amp; Restaurant
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Spa &amp; Fitness
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Sports &amp; Gaming
                                    </a>
                                    <a className="btn btn-link" href="">
                                        Event &amp; Party
                                    </a>
                                    <a className="btn btn-link" href="">
                                        GYM &amp; Yoga
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0"></div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"/>
            </a>
        </>
    )
}