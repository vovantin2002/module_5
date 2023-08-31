export default function Header() {
    return (
        <>
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
                                    <a href="/room" className="nav-item nav-link">
                                        Room Services
                                    </a>
                                    <a href="/house" className="nav-item nav-link">
                                        House Services
                                    </a>
                                    <a href="/villa" className="nav-item nav-link">
                                        Villa Services
                                    </a>
                                    <a href="facility.html" className="nav-item nav-link">
                                        Facility
                                    </a>
                                    <a href="/customer" className="nav-item nav-link">
                                        Customer
                                    </a>
                                    <a href="/contract" className="nav-item nav-link">
                                        Contract
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
            <br/>
            <br/>
            {/*    viết nội dung ở đây*/}
        </>
    )
}