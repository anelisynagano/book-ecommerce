import CartItem from "./CartItem";

const Cart = ({ cartItems, price }) => {
  return (
    <>
      <h2>Your Cart:</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem key={item.isbn13} bookInfo={item} />
          ))}
          <hr />
          <tr>
            <td></td>
            <td>Total:</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
