function Contact() {
  return (
    <div className="container py-5">

      {/* Judul */}
      <div className="text-center mb-5">
        <h1 className="fw-light">Contact Us</h1>
        <p className="lead text-body-secondary">
          Hubungi kami jika Anda memiliki pertanyaan atau membutuhkan
          informasi mengenai buku yang tersedia.
        </p>
      </div>

      <div className="row g-5">

        {/* Informasi Kontak */}
        <div className="col-md-5">

          <h3 className="mb-4">Get in Touch</h3>

          <p>
            Kami siap membantu Anda mendapatkan informasi mengenai
            koleksi buku dan layanan Bookstore.
          </p>

          <div className="mb-3">
            <h5>Email</h5>
            <p className="text-body-secondary">
              bookstore@example.com
            </p>
          </div>

          <div className="mb-3">
            <h5>Phone</h5>
            <p className="text-body-secondary">
              +62 812-3456-7890
            </p>
          </div>

          <div className="mb-3">
            <h5>Address</h5>
            <p className="text-body-secondary">
              Jakarta, Indonesia
            </p>
          </div>

        </div>

        {/* Form Contact */}
        <div className="col-md-7">

          <h3 className="mb-4">Send Us a Message</h3>

          <form>

            <div className="mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Message
              </label>

              <textarea
                className="form-control"
                rows="5"
                placeholder="Tulis pesan Anda"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;