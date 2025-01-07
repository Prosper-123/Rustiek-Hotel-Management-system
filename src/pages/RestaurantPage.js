import React, { useState } from "react";
import restaurantBackground from "../images/restaurantBackground.jpg";
import grilledSalmon from "../images/grilledSalmon.jpg";
import pasta from "../images/pasta.jpg";
import salad from "../images/salad.jpg";
import chicken from "../images/chicken.jpg";
import vegetarian from "../images/vegetarian.jpg";
import spaghetti from "../images/spaghetti.jpg";
import beef from "../images/beef.jpg";
import Bisque from "../images/Bisque.jpg";
import tacos from "../images/tacos.jpg";
import soup from "../images/soup.jpg";

const RestaurantPage = () => {
  const [cart, setCart] = useState([]);
  
  const menu = [
    {
      id: 1,
      name: "Grilled Salmon",
      price: 25,
      description: "Served with a side of steamed vegetables and garlic butter.",
      image: grilledSalmon,
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      price: 18,
      description: "Classic Italian pasta with creamy sauce and crispy pancetta.",
      image: pasta,
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 12,
      description: "Fresh romaine lettuce with Caesar dressing and parmesan.",
      image: salad,
    },
    {
      id: 4,
      name: "Chicken Alfredo",
      price: 20,
      description: "Creamy alfredo sauce with grilled chicken and fettuccine pasta.",
      image: chicken,
    },
    {
      id: 5,
      name: "Vegetarian Pizza",
      price: 16,
      description: "Tomato base with mozzarella, peppers, olives, and mushrooms.",
      image: vegetarian,
    },
    {
      id: 6,
      name: "Spaghetti Bolognese",
      price: 14,
      description: "Traditional Italian spaghetti with a rich and savory meat sauce.",
      image:spaghetti,
    },
    {
      id: 7,
      name: "Beef Tenderloin",
      price: 30,
      description: "Tender grilled beef steak served with mashed potatoes and seasonal veggies.",
      image: beef,
    },
    {
      id: 8,
      name: "Lobster Bisque",
      price: 22,
      description: "Creamy lobster soup served with a touch of brandy and garlic croutons.",
      image: Bisque,
    },
    {
      id: 9,
      name: "Tom Yum Soup",
      price: 12,
      description: "A spicy Thai soup with shrimp, lemongrass, and lime leaves.",
      image: soup,
    },
  ];

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  // Handle Checkout
  const handleCheckout = () => {
    alert("Checkout Successful!");
    setCart([]);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to Rustiek Restaurant</h1>
        <p style={styles.heroText}>
          Experience fine dining with exquisite flavors and fresh ingredients.
        </p>
      </section>

      {/* Restaurant Menu Section */}
      <section style={styles.menu}>
        <h2 style={styles.sectionTitle}>Our Menu</h2>
        <div style={styles.menuGrid}>
          {menu.map((item) => (
            <div key={item.id} style={styles.menuItem}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.menuImage}
              />
              <div style={styles.menuDetails}>
                <h3 style={styles.menuName}>{item.name}</h3>
                <p style={styles.menuDescription}>{item.description}</p>
                <p style={styles.menuPrice}>${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  style={styles.addButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      {cart.length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Your Cart</h2>
          <ul style={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <span style={styles.menuName}>{item.name}</span>
                <span style={styles.menuPrice}>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.checkoutContainer}>
            <span style={styles.totalPrice}>
              Total: ${cart.reduce((total, item) => total + item.price, 0)}
            </span>
            <button onClick={handleCheckout} style={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  hero: {
    backgroundImage: `url(${restaurantBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    textAlign: "center",
    padding: "100px 20px",
    marginBottom: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "15px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  heroText: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    maxWidth: "800px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    textAlign: "center",
    marginBottom: "30px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#333",
  },
  menu: {
    margin: "40px 0",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "30px",
  },
  menuItem: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  menuImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderBottom: "2px solid #ddd",
  },
  menuDetails: {
    padding: "20px",
  },
  menuName: {
    fontSize: "1.8rem",
    marginBottom: "15px",
    fontWeight: "600",
  },
  menuDescription: {
    fontSize: "1.1rem",
    color: "#777",
    marginBottom: "15px",
  },
  menuPrice: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#007bff",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cartList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  checkoutContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    alignItems: "center",
  },
  totalPrice: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default RestaurantPage;
