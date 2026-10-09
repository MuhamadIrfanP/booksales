import { useState } from "react";
import initialBooks from "./Utils/books";

function Book() {
  const [books, setBooks] = useState(initialBooks);

  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      year: Number(form.year),
      description: form.description,
      image: form.image,
    };

    setBooks([...books, newBook]);

    setForm({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
    });
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Books</h1>
        <p className="lead text-body-secondary">
          Temukan koleksi buku pilihan dari BookSales.
        </p>
      </div>

      {/* Form Tambah Buku */}
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h4 className="mb-4">Tambah Buku</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Judul Buku</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={form.title}
                onChange={handleChange}
                placeholder="Masukkan judul buku"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Penulis</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={form.author}
                onChange={handleChange}
                placeholder="Masukkan nama penulis"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Tahun Terbit</label>
              <input
                type="number"
                name="year"
                className="form-control"
                value={form.year}
                onChange={handleChange}
                placeholder="Contoh: 2025"
                min="1"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Deskripsi</label>
              <textarea
                name="description"
                className="form-control"
                value={form.description}
                onChange={handleChange}
                placeholder="Masukkan deskripsi buku"
                rows="3"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">URL Gambar Buku</label>
              <input
                type="url"
                name="image"
                className="form-control"
                value={form.image}
                onChange={handleChange}
                placeholder="https://contoh.com/gambar.jpg"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Tambah Buku
            </button>
          </form>
        </div>
      </div>

      {/* Daftar Buku */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;