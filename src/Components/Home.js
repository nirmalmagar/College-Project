import React from 'react';
const Home = () => {
    return (
        <>
            <nav className="navbar text-light py-4" id='homeBgImg' style={{ backgroundImage: `url(${"../images/hero.png"})` }} >
                <div className="container">
                    <img src="../images/logo.png" alt="" />
                    <ul className="nav justify-content-end fs-6 fw-semibold">
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
                        <li className="nav-item mx-4">
                            <button type="button" className=" px-5 py-2 fs-6 fw-semibold border-0 rounded text-light">Join</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="px-5 py-2 fs-6 fw-semibold bg-transparent border border-2 rounded text-light border-light">LogIn</button>
                        </li>
                    </ul>
                    <div id="platform">
                        <h1 className='fw-bold'>Online Learning <br />Platform</h1>
                        <p className='fw-semibold py-4 fs-5'>Build skills with courses, certificates, and degrees online from <br />
                            world-class universities and companies</p>
                        <button className='px-5 py-2 border-0 rounded text-light fw-semibold'>Join for free</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home