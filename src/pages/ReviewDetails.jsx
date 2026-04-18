import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewDetails() {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data.data))
      .catch((err) => console.error("Error fetching review:", err));
  }, [id]);

  if (!review) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
<div className="container py-5">
<h1>{review.attributes.Title}</h1>
{review.attributes.Image?.data?.attributes?.url && (
  <img src={`http://localhost:1337${review.attributes.Image.data.attributes.url}`} alt={review.attributes.Title} className="img-fluid mb-4 rounded shadow" />
)}
<p className="text-muted mb-2">{review.attributes.Category}</p>
<p className="mb-3"><strong>Rating:</strong> {review.attributes.Rating}/10</p>
<div className="mb-3">
  <strong>Summary:</strong> {review.attributes.Summary}
</div>
<div dangerouslySetInnerHTML={{ __html: review.attributes.Content }} />
    </div>
  );
}

export default ReviewDetails; 