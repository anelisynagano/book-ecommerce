import { useState } from "react";

const BookCard = ({ bookInfo, handleAddToFavs, handleAddToCart }) => {
  const [isFav, setIsFav] = useState(false);

  const handleClickFav = () => {
    setIsFav(!isFav);
    handleAddToFavs(bookInfo, isFav);
  };

  return (
    <div className='book-card'>
      <div className='book-card-container'>
        <img src={bookInfo.image} alt='book-cover' />
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
