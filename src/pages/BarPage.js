import React, { useState } from "react";

const BarPage = () => {
  const [cart, setCart] = useState([]);
  
  // Drink categories and their respective items, now including images
  const menuCategories = {
    cocktails: [
      { name: "Classic Mojito", price: 8, image: "/assets/classic-mojito.jpg" },
      { name: "Old Fashioned", price: 10, image: "/assets/old-fashioned.jpg" },
      { name: "Margarita", price: 9, image: "/assets/margarita.jpg" },
    ],
    mocktails: [
      { name: "Virgin Mojito", price: 6, image: "/assets/virgin-mojito.jpg" },
      { name: "Citrus Punch", price: 7, image: "/assets/citrus-punch.jpg" },
      { name: "Berry Bliss", price: 6, image: "/assets/berry-bliss.jpg" },
    ],
    beers: [
      { name: "Craft Beer", price: 6, image: "/assets/craft-beer.jpg" },
      { name: "IPA", price: 5, image: "/assets/ipa.jpg" },
      { name: "Stout", price: 7, image: "/assets/stout.jpg" },
    ],
  };

  // Add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from cart
  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.name !== item.name));
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
        <h1 style={styles.heroTitle}>Welcome to Rustiek Bar</h1>
        <p style={styles.heroText}>Where every sip is a story.</p>
      </section>

      {/* Bar Menu */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Menu</h2>

        {Object.keys(menuCategories).map(category => (
          <div key={category} style={styles.category}>
            <h3 style={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div style={styles.menuGrid}>
              {menuCategories[category].map((item, index) => (
                <div key={index} style={styles.menuItem}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.menuImage}
                  />
                  <div style={styles.menuDetails}>
                    <span style={styles.menuName}>{item.name}</span>
                    <span style={styles.menuPrice}>${item.price}</span>
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
          </div>
        ))}
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

      {/* Special Offers */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Special Offers</h2>
        <p style={styles.text}>Join us for Happy Hour every Friday, 5 PM - 7 PM!</p>
      </section>

      {/* Gallery */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Gallery</h2>
        <div style={styles.gallery}>
          <img
            src="/assets/bar1.jpg"
            alt="Bar Ambience"
            style={styles.galleryImage}
          />
          <img
            src="/assets/drink1.jpg"
            alt="Cocktail"
            style={styles.galleryImage}
          />
          <img
            src="/assets/bar2.jpg"
            alt="Bar Counter"
            style={styles.galleryImage}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.text}>Open Daily: 5 PM - 12 AM</p>
        <p style={styles.text}>Phone: +123-456-7890</p>
        <p style={styles.text}>Location: Rustiek Hotel, Downtown</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Helvetica Neue', sans-serif",
    color: "#333",
    lineHeight: "1.6",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  hero: {
    backgroundImage: 'url("/assets/bar-hero.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    textAlign: "center",
    padding: "100px 20px",
    marginBottom: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  heroText: {
    fontSize: "1.4rem",
    fontStyle: "italic",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "15px",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "0.5px",
    color: "#333",
  },
  category: {
    marginBottom: "30px",
  },
  categoryTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  menuImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  menuDetails: {
    width: "100%",
  },
  menuName: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "5px",
  },
  menuPrice: {
    fontSize: "1.2rem",
    color: "#007bff",
    marginBottom: "10px",
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
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },
  galleryImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "12px",
  },
};

export default BarPage;
