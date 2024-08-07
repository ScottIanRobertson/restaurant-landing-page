import React from "react";
import "./Menu.css";
import grilled_chicken from "../assets/grilled_chicken.jpg";
import beef_steak from "../assets/beef_steak.jpg";
import pasta_carbonara from "../assets/pasta_carbonara.jpg";
import caesar_salad from "../assets/caesar_salad.jpg";
import salmon_fillet from "../assets/salmon_fillet.jpg";
import shrimp_tacos from "../assets/shrimp_tacos.jpg";
import veggie_burger from "../assets/veggie_burger.jpg";
import margherita_pizza from "../assets/margherita_pizza.jpg";
import chocolate_cake from "../assets/chocolate_cake.jpg";

const Menu = () => {
  const menuItems = [
    {
      name: "Grilled Chicken",
      price: "$15",
      image: grilled_chicken,
    },
    {
      name: "Beef Steak",
      price: "$20",
      image: beef_steak,
    },
    {
      name: "Pasta Carbonara",
      price: "$12",
      image: pasta_carbonara,
    },
    {
      name: "Caesar Salad",
      price: "$10",
      image: caesar_salad,
    },
    {
      name: "Salmon Fillet",
      price: "$18",
      image: salmon_fillet,
    },
    {
      name: "Shrimp Tacos",
      price: "$14",
      image: shrimp_tacos,
    },
    {
      name: "Veggie Burger",
      price: "$12",
      image: veggie_burger,
    },
    {
      name: "Margherita Pizza",
      price: "$16",
      image: margherita_pizza,
    },
    {
      name: "Chocolate Cake",
      price: "$8",
      image: chocolate_cake,
    }
  ];

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

