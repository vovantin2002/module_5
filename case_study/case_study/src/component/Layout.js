import {Component} from "react";
import List from "./service/List";
import Create from "./service/Create";

class Layout extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="container-xxl bg-white p-0">
                     {/* Header Start */}
                    <div className="container-fluid bg-dark px-0">
                        <div className="row gx-0">
                            <div className="col-lg-3 bg-dark d-none d-lg-block">
                                <a
                                    href="index.html"
                                    className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                                >
                                    <h1 className="m-0 text-primary text-uppercase">Furama</h1>
                                </a>
                            </div>
                            <div className="col-lg-9">
                                <div className="row gx-0 bg-white d-none d-lg-flex">
                                    <div className="col-lg-7 px-5 text-start">
                                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                            <i className="fa fa-envelope text-primary me-2"/>
                                            <p className="mb-0">vovantin9502@gmail.com</p>
                                        </div>
                                        <div className="h-100 d-inline-flex align-items-center py-2">
                                            <i className="fa fa-phone-alt text-primary me-2"/>
                                            <p className="mb-0">0778298955</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 px-5 text-end">
                                        <div className="d-inline-flex align-items-center py-2">
                                            <a className="me-3" href="">
                                                <i className="fab fa-facebook-f"/>
                                            </a>
                                            <a className="me-3" href="">
                                                <i className="fab fa-twitter"/>
                                            </a>
                                            <a className="me-3" href="">
                                                <i className="fab fa-linkedin-in"/>
                                            </a>
                                            <a className="me-3" href="">
                                                <i className="fab fa-instagram"/>
                                            </a>
                                            <a className="" href="">
                                                <i className="fab fa-youtube"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                                        <h1 className="m-0 text-primary text-uppercase">Furama</h1>
                                    </a>
                                    <button
                                        type="button"
                                        className="navbar-toggler"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarCollapse"
                                    >
                                        <span className="navbar-toggler-icon"/>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse justify-content-between"
                                        id="navbarCollapse"
                                    >
                                        <div className="navbar-nav mr-auto py-0">
                                            <a href="index.html" className="nav-item nav-link active">
                                                Home
                                            </a>
                                            <a href="service/service.html" className="nav-item nav-link">
                                                Services
                                            </a>
                                            <a href="facility.html" className="nav-item nav-link">
                                                Facility
                                            </a>
                                            <a href="customer/customer.html" className="nav-item nav-link">
                                                Customer
                                            </a>
                                            <a href="contact.html" className="nav-item nav-link">
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* {/* Header End */}
                    {/* Carousel Start */}
                    <div className="container-fluid p-0 mb-5"></div>
                    <br/>
                    <br/>
                     {/*    viết nội dung ở đây*/}
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
                </div>
            </>
        )
    }
}

export default Layout;