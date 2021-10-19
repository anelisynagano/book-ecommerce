import { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ bookInfo, handleAddToFavs, handleAddToCart, isFavorite }) => {
  const [isFav, setIsFav] = useState(isFavorite);

  const handleClickFav = () => {
    setIsFav(!isFav);
    handleAddToFavs(bookInfo, isFav);
  };

  return (
    <div className='book-card'>
      <div className='book-card-container'>
        <Link to={`/books/${bookInfo.isbn13}`}>
          <img src={bookInfo.image} alt='book-cover' />
        </Link>
        <p onClick={handleClickFav}>{isFav ? "❤️" : "🤍"}</p>
      </div>
      <p>{bookInfo.title}</p>
      <div className='book-card-container'>
        <p>{bookInfo.price}</p>
        <button onClick={() => handleAddToCart(bookInfo)}>Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
