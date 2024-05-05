import React from 'react'

const RespNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">Course</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="px-5 py-2 fs-6 fw-semibold border-0 rounded text-light">Join</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="px-5 py-2 fs-6 fw-semibold bg-transparent border border-2 rounded text-light border-light">LogIn</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default RespNavbar