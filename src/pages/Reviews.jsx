import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:1337/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const filteredReviews = reviews.filter((review) =>
    review.attributes.Title?.toLowerCase().includes(search.toLowerCase()) || ''
  );

  return (
    <div className="container py-5">
      <h1 className="mb-4">Reviews</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search reviews..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredReviews.map((review) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={review.id}>
<img src={review.attributes.Image?.data?.attributes?.url ? `http://localhost:1337${review.attributes.Image.data.attributes.url}` : '/images/placeholder-movie.jpg'} alt={review.attributes.Title} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
<div className="card h-100 shadow-sm">
              <div className="card-body">
<h5 className="card-title">{review.attributes.Title}</h5>
<p className="card-text">{review.attributes.Summary}</p>
                <Link to={`/reviews/${review.id}`} className="btn btn-primary">
                  Read Full Review
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;