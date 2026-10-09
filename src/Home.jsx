import books from "./Utils/books";

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Seporsi Mie Ayam Sebelum Mati
            </h1>

            <p className="lead">
              Sebuah novel fiksi bergenre slice-of-life karya Brian Khrisna
              yang diterbitkan pertama kali pada awal tahun 2025.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>

          <div className="col-10 col-sm-8 col-lg-4">
            <img
              className="img-fluid rounded-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaPkqwsHr1H6IlN-xWe2uiWFkNOv-wB-hOXYz1KgGSg&s=10"
              alt="Seporsi Mie Ayam Sebelum Mati"
            />
          </div>
        </div>
      </div>

      {/* Product List */}
      <section id="books" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>

            <p className="lead text-body-secondary">
              Temukan berbagai buku pilihan dan best seller yang cocok
              untuk menemani waktu membaca Anda.
            </p>

            <p>
              <a href="#books" className="btn btn-primary my-2 m-2">
                View Books
              </a>

              <a href="#books" className="btn btn-secondary my-2 m-2">
                Other Books
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Books */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      height: "225px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>

                    <p className="text-body-secondary mb-2">
                      Penulis: {book.author}
                    </p>

                    <p className="text-body-secondary mb-2">
                      Tahun: {book.year}
                    </p>

                    <p className="card-text">{book.description}</p>

                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>

                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Buy Now
                        </button>
                      </div>

                      <small className="text-body-secondary">
                        Best Seller
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;