function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="border p-2 rounded shadow-sm hover:shadow-md">
      <img src={coverUrl} alt={book.title} className="mb-2 w-full h-48 object-cover" />
      <h3 className="font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p className="text-xs text-gray-500">{book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookCard;
