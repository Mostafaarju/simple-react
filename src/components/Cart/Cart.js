import React from "react";
import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log("This is Cart", cart);
  //   console.log(cart);
  //   let totalSalary = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const player = cart[i];
  //     totalSalary = totalSalary + player.salary;
  //   }
  const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0);
  return (
    <div>
      <h3>This is Cart: {cart.length}</h3>
      <p>Total Salary: ${totalSalary}</p>
    </div>
  );
};

export default Cart;
