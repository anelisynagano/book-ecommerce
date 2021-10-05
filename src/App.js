import { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";

function App() {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  const handleAddToCart = (bookInfo) => {
    const newCart = [...cartItems];
    let isInCart = newCart.find((item) => item.isbn13 === bookInfo.isbn13);
    if (!isInCart) {
      isInCart = { ...bookInfo, quantity: 1 };
      newCart.push(isInCart);
    } else {
      isInCart.quantity++;
    }

    setCartItems(newCart);
  };

  return (
    <div>
      <Cart cartItems={cartItems} />
      <Favorites favoriteBooks={favoriteBooks} />
      <BookList
        books={books}
        handleAddToFavs={handleAddToFavs}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
