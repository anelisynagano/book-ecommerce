import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Favorites from "./components/Favorites";

function App() {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const fetchBooks = () => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  };

  useEffect(fetchBooks, []);

  const handleAddToFavs = (bookInfo, isFav) => {
    const isFavorite = favoriteBooks.find(
      (favoriteBook) => favoriteBook.isbn13 === bookInfo.isbn13
    );
    if (!isFavorite) {
      setFavoriteBooks([...favoriteBooks, bookInfo]);
    }

    const removeFav = favoriteBooks.filter(
      (book) => book.isbn13 !== bookInfo.isbn13
    );

    if (isFav) {
      setFavoriteBooks(removeFav);
    }
  };

  return (
    <div>
      <Favorites favoriteBooks={favoriteBooks} />
      <BookList books={books} handleAddToFavs={handleAddToFavs} />
    </div>
  );
}

export default App;
