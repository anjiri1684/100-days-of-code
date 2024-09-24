import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }

  function handleShippingChange(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        name={comment}
        id={comment}
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="paypal">Paypal</option>
        <option value="gift-card">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label htmlFor="">Pick Up</label>
      <input
        type="radio"
        value="Pick Up"
        checked={shipping === "Pick Up"}
        onChange={handleShippingChange}
      />
      <br />
      <label htmlFor="">Delivery</label>
      <input
        type="radio"
        value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}
      />
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
