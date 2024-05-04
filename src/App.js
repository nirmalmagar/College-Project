function App() {
  return (
    <>
      <nav className="navbar text-light" style={{ backgroundImage: `url(${"../images/hero.png"})` }} >
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
              <button type="button" className="btn btn-danger px-5 py-2 fs-6 fw-semibold">Join</button>
            </li>
            <li className="nav-item">
              <button type="button" className="px-5 py-2 fs-6 fw-semibold bg-transparent border border-2 rounded text-light border-light hover-bg-light">LogIn</button>
            </li>
          </ul>
          <h1>Online Learning Platform</h1>
          <p>Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
        </div>
      </nav>
    </>
  );
}

export default App;
