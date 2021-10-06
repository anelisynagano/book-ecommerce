import CartItem from "./CartItem";

const Cart = ({ cartItems, price }) => {
  return (
    <>
      <h2>Your Cart:</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.isbn13} bookInfo={item} />
        ))}
        <div>Total: {price}</div>
      </div>
    </>
  );
};

export default Cart;
