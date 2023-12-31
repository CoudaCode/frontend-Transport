import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar ">
        <header>
          {/* <!-- Navbar --> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            {/* <!-- Container wrapper --> */}
            <div className="container">
              {/* <!-- Navbar brand --> */}
              <Link to={"/"}>
                <a className="navbar-brand me-2">
                  {/* <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="16"
                  alt="MDB Logo"
                  loading="lazy"
                  style={{marginTop: "-1px"}}
                /> */}
                  AMT TRANSPORT
                </a>
              </Link>
              {/* 
             <!-- Toggle button --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>

              {/* <!-- Collapsible wrapper --> */}
              <div
                className="collapse navbar-collapse"
                id="navbarButtonsExample"
              >
                {/* <!-- Left links --> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to={"/"}>Acceuil</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to={"/Reservation"}>Reservation</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to={"/Apropos"}>A propos</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Link to={"/Contact"}>Contact</Link>
                    </a>
                  </li>
                </ul>
                {/* <!-- Left links --> */}

                <div className="d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-link px-3 me-2"
                    style={{ color: "white" }}
                  >
                    <Link to={"/Login"}> se Connexion</Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-3"
                    style={{ background: "#212529" }}
                  >
                    <Link to={"/Register"}>se Connexion</Link>
                  </button>
                </div>
              </div>
              {/* <!-- Collapsible wrapper --> */}
            </div>
            {/* <!-- Container wrapper --> */}
          </nav>
          {/* <!-- Navbar --> */}
        </header>
      </div>
    </>
  );
}
export default Navbar;
