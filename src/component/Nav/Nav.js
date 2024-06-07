import React from 'react'
import "./Nav.css"
function Nav() {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand " id='logo' href="#">
                        Logo
                    </a>

                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                Logo
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item ">
                                    <a className="nav-link  mx-lg-2 fs-4" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fs-4" href="#">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fs-4" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fs-4" href="#">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2 fs-4" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <button type='button' className='login-button'>Login</button>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>

            <section className='hero-section'>

            </section>


        </>
    )
}

export default Nav