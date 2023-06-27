import Navbar from "./../Components/header/Navbar";
import Footer from "./../Components/footer/Footer";

function Acceuil() {
  return (
    <>
      <div className="Acceuil">
        <Navbar />
        <header>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>
                    Ayez une avance sur la disponibilité de nos cars afin de
                    mieux faire vos reservation pour vos tickets de voyage
                  </h2>
                  <p>
                    Découvrez le monde avec facilité et réservez vos billets en
                    toute simplicité!
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>Voyager en groupe</h2>
                  <p>
                    Explorez le monde et réservez votre prochaine aventure !
                  </p>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url('https://source.unsplash.com/lHGeqh3XhRY/1920x1080')`,
                }}
              >
                <div className="carousel-caption">
                  <h2>
                    Réservez vos billets pour des destinations extraordinaires !
                  </h2>
                  <p>
                    Découvrez le monde et réservez votre aventure inoubliable
                    aujourd'hui !
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>
        <div></div>

        <div className="container my-5">
          <h2 className="text-center"></h2>
          <div className="card shadow-2-strong text-center my-5">
            <div className="card-body">
              <p className="card-text">
                Bienvenue sur notre site de réservation de billets, votre
                portail vers des voyages passionnants et des aventures sans fin.{" "}
                <br />
                Les services de voyages en groupe d'AMT-TRANSPORT vous
                facilitent la tâche. AMT-TRANSPORT s’occupe des formalités de
                vos voyages en groupe et individuel
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                  className="card-img-top"
                  alt="Sunset Over the Sea"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <h2 className="text-center">
            Planifiez votre voyage en toute confiance
          </h2>

          <div className="row ">
            <div className="col-sm-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-center">
                        <h1>Voyagez depuis ABIDJAN</h1>
                  </p>
                  <a href="#!" class="btn btn-primary">
                    Reserver mon ticket pour abidjan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-center">
                        <h1>Voyagez depuis ABIDJAN</h1>
                  </p>
                  <a href="#!" class="btn btn-primary">
                    Reserver mon ticket pour abidjan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                    className="img-fluid"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                    ></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-center">
                        <h1>Voyagez depuis ABIDJAN</h1>
                  </p>
                  <a href="#!" class="btn btn-primary">
                    Reserver mon ticket pour abidjan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Acceuil;
