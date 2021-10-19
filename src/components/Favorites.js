import BookCard from "./BookCard";

const Favorites = ({ favoriteBooks, handleAddToFavs, handleAddToCart }) => {
  return (
    <>
      <h2>Favorite Books</h2>
      <div className='books-container'>
        {favoriteBooks.map((book) => (
          <BookCard
            key={book.isbn13}
            bookInfo={book}
            handleAddToFavs={handleAddToFavs}
            handleAddToCart={handleAddToCart}
            isFavorite
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
