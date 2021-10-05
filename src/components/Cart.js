import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <>
      <h2>Your Cart:</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.isbn13} bookInfo={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
