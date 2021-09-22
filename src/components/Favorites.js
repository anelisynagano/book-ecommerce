import BookCard from "./BookCard";

const Favorites = ({ favoriteBooks }) => {
  return (
    <>
      <h2>Favorite Books</h2>
      <div className='books-container'>
        {favoriteBooks.map((book) => (
          <BookCard key={book.isbn13} bookInfo={book} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
