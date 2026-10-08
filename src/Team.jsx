function Team() {
  return (
    <div className="container py-5">

      {/* Judul */}
      <div className="text-center mb-5">
        <h1 className="fw-light">Our Team</h1>
        <p className="lead text-body-secondary">
          Kenali tim yang berada di balik Bookstore.
        </p>
      </div>

      {/* Team */}
      <div className="row row-cols-1 row-cols-md-3 g-4">

        {/* Anggota 1 */}
        <div className="col">
          <div className="card h-100 text-center shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_K4BSTOF9trnxv7wig4BD8Lw0xuXHpUNe7zeLWoM6g&s=10"
              className="card-img-top"
              alt="Muhamad Irfan Pratama"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">
                Muhamad Irfan Pratama
              </h5>

              <p className="text-primary mb-2">
                Project Manager
              </p>

              <p className="card-text">
                Bertanggung jawab dalam mengatur dan mengoordinasikan
                pengembangan website Bookstore.
              </p>
            </div>
          </div>
        </div>

        {/* Anggota 2 */}
        <div className="col">
          <div className="card h-100 text-center shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_K4BSTOF9trnxv7wig4BD8Lw0xuXHpUNe7zeLWoM6g&s=10"
              className="card-img-top"
              alt="Team Member"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">
                Jembar Mahdinata
              </h5>

              <p className="text-primary mb-2">
                UI/UX Designer
              </p>

              <p className="card-text">
                Bertanggung jawab dalam merancang tampilan dan pengalaman
                pengguna pada website Bookstore.
              </p>
            </div>
          </div>
        </div>

        {/* Anggota 3 */}
        <div className="col">
          <div className="card h-100 text-center shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_K4BSTOF9trnxv7wig4BD8Lw0xuXHpUNe7zeLWoM6g&s=10"
              className="card-img-top"
              alt="Team Member"
              style={{ height: "250px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h5 className="card-title">
                Riez Rafa Roro
              </h5>

              <p className="text-primary mb-2">
                Developer
              </p>

              <p className="card-text">
                Bertanggung jawab dalam mengembangkan dan memastikan
                fitur website dapat berjalan dengan baik.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Team;