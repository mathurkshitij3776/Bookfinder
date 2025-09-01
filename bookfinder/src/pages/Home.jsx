import { useState } from "react";
import { searchBooks } from "../api/openLibrary";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Loader from "../components/Loader";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchBooks(query);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
return (
  // We use flexbox to center all child elements
  <div className="p-4 max-w-3xl mx-auto flex flex-col items-center">
    {/* The text-center class on h1 is no longer needed as the parent handles centering */}
    <h1 className="text-2xl text-black font-bold mb-4">📚 Book Finder</h1>
    <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
    {loading && <Loader />}
    {error && <p className="text-red-500">{error}</p>}
    <BookList books={results} />
  </div>
)};

export default Home;
