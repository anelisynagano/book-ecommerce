import BookCard from "./BookCard";

const BookList = ({ books, handleAddToFavs, handleAddToCart }) => {
  return (
    <>
      <h2>Books Available</h2>
      <div className='books-container'>
        {books.map((book) => (
          <BookCard
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

export default BookList;
