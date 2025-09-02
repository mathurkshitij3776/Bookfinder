import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBookDetails } from "../api/openLibrary";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await fetchBookDetails(`/works/${id}`);
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, [id]);

  if (loading) return <p>Loading book...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-500">← Back</Link>
      <h2 className="text-xl font-bold mt-4">{book.title}</h2>
      <p>By: {book.authors ? book.authors.map(a => a.name).join(", ") : "Unknown"}</p>
      <p>{book.description ? book.description.value || book.description : "No description available."}</p>
    </div>
  );
}

export default BookDetails;
