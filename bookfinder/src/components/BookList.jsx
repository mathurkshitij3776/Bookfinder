import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function BookList({ books, message }) {
  if (!books || books.length === 0 && message=== false) {
    return <p>No results found.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {books.map((book) => (
        <Link key={book.key} to={`/book/${book.key.split("/").pop()}`}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
}

export default BookList;
