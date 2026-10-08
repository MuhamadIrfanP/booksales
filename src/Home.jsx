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

            <h1 className="fw-light">
              Best Seller
            </h1>

            <p className="lead text-body-secondary">
              Temukan berbagai buku pilihan dan best seller yang cocok
              untuk menemani waktu membaca Anda.
            </p>

            <p>
              <a
                href="#"
                className="btn btn-primary my-2 m-2"
              >
                View Books
              </a>

              <a
                href="#"
                className="btn btn-secondary my-2 m-2"
              >
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

            {/* Card 1 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaPkqwsHr1H6IlN-xWe2uiWFkNOv-wB-hOXYz1KgGSg&s=10"
                  className="card-img-top"
                  alt="Seporsi Mie Ayam Sebelum Mati"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Seporsi Mie Ayam Sebelum Mati
                  </h5>

                  <p className="card-text">
                    Novel slice-of-life karya Brian Khrisna yang
                    menceritakan kehidupan dan perjalanan menemukan
                    makna hidup.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 2 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
                  className="card-img-top"
                  alt="Atomic Habits"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Atomic Habits
                  </h5>

                  <p className="card-text">
                    Buku tentang bagaimana kebiasaan kecil dapat
                    memberikan perubahan besar dalam kehidupan.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 3 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
                  className="card-img-top"
                  alt="The Psychology of Money"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    The Psychology of Money
                  </h5>

                  <p className="card-text">
                    Buku yang membahas hubungan manusia dengan uang,
                    investasi, dan keputusan finansial.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 4 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
                  className="card-img-top"
                  alt="Rich Dad Poor Dad"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Rich Dad Poor Dad
                  </h5>

                  <p className="card-text">
                    Buku populer tentang pola pikir keuangan, aset,
                    kewirausahaan, dan kebebasan finansial.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 5 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9786233463034-L.jpg"
                  className="card-img-top"
                  alt="Filosofi Teras"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Filosofi Teras
                  </h5>

                  <p className="card-text">
                    Buku pengantar Stoikisme yang membahas cara
                    menghadapi berbagai masalah dalam kehidupan.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 6 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9786024246945-L.jpg"
                  className="card-img-top"
                  alt="Laut Bercerita"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Laut Bercerita
                  </h5>

                  <p className="card-text">
                    Novel karya Leila S. Chudori tentang persahabatan,
                    keluarga, perjuangan, dan kehilangan.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 7 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/isbn/9786020301129-L.jpg"
                  className="card-img-top"
                  alt="Bumi"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Bumi
                  </h5>

                  <p className="card-text">
                    Novel fantasi karya Tere Liye yang menceritakan
                    petualangan Raib dan dunia paralel.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 8 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9789792248616-L.jpg"
                  className="card-img-top"
                  alt="Negeri 5 Menara"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    Negeri 5 Menara
                  </h5>

                  <p className="card-text">
                    Kisah persahabatan dan perjuangan enam santri
                    dalam mengejar cita-cita mereka.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

            {/* Card 9 */}
            <div className="col">
              <div className="card shadow-sm">

                <img
                  src="https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
                  className="card-img-top"
                  alt="The Alchemist"
                  style={{ height: "225px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">
                    The Alchemist
                  </h5>

                  <p className="card-text">
                    Novel inspiratif tentang perjalanan seorang pemuda
                    dalam mengejar impian dan tujuan hidup.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
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

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;