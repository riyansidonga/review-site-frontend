function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center min-vh-100">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">Movie Reviews</h1>
          <p className="lead mb-4">Discover honest reviews, ratings, and insights from fellow movie lovers. From blockbusters to indie gems, find your next watch.</p>
          <a href="/reviews" className="btn btn-primary btn-lg me-3">Browse Reviews</a>
          <a href="/contact" className="btn btn-outline-light btn-lg">Contact Us</a>
        </div>
        <div className="col-lg-6">
          <img src="https://images.unsplash.com/photo-1489599499392-4d2178a8e0f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="img-fluid rounded shadow" alt="Movies" />
        </div>
      </div>
    </div>
  );
}

export default Home;
