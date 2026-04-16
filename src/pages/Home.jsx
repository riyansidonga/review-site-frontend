function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center min-vh-100">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-4">Games Reviews</h1>
          <p className="lead mb-4">Discover honest reviews, ratings, and insights from fellow gamers. find your next game.</p>
          <a href="/reviews" className="btn btn-primary btn-lg me-3">Browse Reviews</a>
          <a href="/contact" className="btn btn-outline-light btn-lg">Contact Us</a>
        </div>
        <div className="col-lg-6">
          <img src="https://unsplash.com/photos/person-sitting-on-gaming-chair-while-playing-video-game-Mf23RF8xArY" className="img-fluid rounded shadow" alt="Movies" />
        </div>
      </div>
    </div>
  );
}

export default Home;
