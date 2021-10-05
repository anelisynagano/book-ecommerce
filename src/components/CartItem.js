const CartItem = ({ bookInfo }) => {
  return (
    <div className='cart-item'>
      <div>{bookInfo.title}</div>
      <div>{bookInfo.quantity}</div>
      <div>{bookInfo.price}</div>
    </div>
  );
};

export default CartItem;
