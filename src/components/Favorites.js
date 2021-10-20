import BookCard from "./BookCard";

const Favorites = ({ favoriteBooks, handleAddToFavs, handleAddToCart }) => {
  return (
    <>
      <h2>Favorite Books</h2>
      <div className='books-container'>
        {favoriteBooks.map((book) => (
          <BookCard
            isFavorite
            key={book.isbn13}
            bookInfo={book}
            handleAddToFavs={handleAddToFavs}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
