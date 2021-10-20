const CartItem = ({ bookInfo }) => {
  return (
    <tr>
      <td>{bookInfo.title}</td>
      <td>{bookInfo.quantity}</td>
      <td>{bookInfo.price}</td>
    </tr>
  );
};

export default CartItem;
