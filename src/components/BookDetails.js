const BookDetails = ({ routeProps, books }) => {
  console.log(routeProps.match.params.isbn13);
  console.log(books);

  const foundBook = books.find(
    (book) => book.isbn13 === routeProps.match.params.isbn13
  );

  return (
    <div>
      <h2>{foundBook.title}</h2>
      <img src={foundBook.image} alt='book cover' />
    </div>
  );
};

export default BookDetails;
