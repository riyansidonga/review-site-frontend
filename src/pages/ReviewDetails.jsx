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
{review.attributes.Title}
{review.attributes.Category}
{review.attributes.Rating}
{review.attributes.Summary}
{review.attributes.Content}
    </div>
  );
}

export default ReviewDetails; 