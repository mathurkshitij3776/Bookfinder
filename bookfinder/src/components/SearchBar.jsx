function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex justify-center items-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books by title..."
        className="flex-1 border p-2 rounded"
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
