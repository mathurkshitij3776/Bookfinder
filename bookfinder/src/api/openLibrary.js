import axios from "axios";

// Base API for search
export const searchBooks = async (query) => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
    );
    return res.data.docs; // list of books
  } catch (err) {
    throw new Error("Failed to fetch books");
  }
};

// Fetch book details by work key
export const fetchBookDetails = async (workKey) => {
  try {
    const res = await axios.get(`https://openlibrary.org${workKey}.json`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch book details");
  }
};
