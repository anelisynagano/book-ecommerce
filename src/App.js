import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  const [userInfo, setUserInfo] = useState({ name: "my user" });

  const fetchBooks = () => {
    fetch("http://localhost:8000/")
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
    setPrice(price + parseFloat(bookInfo.price.substring(1)));

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
      <BrowserRouter>
        <Navbar price={price.toFixed(2)} />
        <Switch>
          <Route exact path='/'>
            <BookList
              books={books}
              handleAddToFavs={handleAddToFavs}
              handleAddToCart={handleAddToCart}
            />
          </Route>
          <Route path='/cart'>
            <Cart cartItems={cartItems} price={price.toFixed(2)} />
          </Route>
          <Route
            path='/favorites'
            render={() => (
              <Favorites
                handleAddToFavs={handleAddToFavs}
                handleAddToCart={handleAddToCart}
                favoriteBooks={favoriteBooks}
              />
            )}
          />
          <Route
            path='/books/:isbn13'
            render={(routeProps) => (
              <BookDetails routeProps={routeProps} books={books} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
