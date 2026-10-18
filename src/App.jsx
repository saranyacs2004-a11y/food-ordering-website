
import { useState } from 'react'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const foods = [
    { id: 1, name: 'Pizza', price: 199, image: '🍕', category: 'Veg' },
    { id: 2, name: 'Burger', price: 129, image: '🍔', category: 'Veg' },
    { id: 3, name: 'Biryani', price: 179, image: '🍛', category: 'Non-Veg' },
    { id: 4, name: 'Dosa', price: 80, image: '🥞', category: 'Veg' },
    { id: 5, name: 'Chicken Burger', price: 159, image: '🍔', category: 'Non-Veg' },
    { id: 6, name: 'Paneer Pizza', price: 229, image: '🍕', category: 'Veg' }
  ]

  function addToCart(food) {
    setCart([...cart, food])
  }

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || food.category === category

    return matchesSearch && matchesCategory
  })

  const total = cart.reduce((sum, food) => sum + food.price, 0)

  return (
    <div>
      <nav className="navbar">
        <h2>🍔 Foodie</h2>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
        <button>🛒 Cart ({cart.length})</button>
      </nav>

      <section className="hero" id="home">
        <div>
          <h1>Delicious Food,<br />Delivered To You!</h1>
          <p>Your favourite food, fresh and tasty.</p>
          <a className="order-btn" href="#menu">Order Now</a>
        </div>
        <div className="hero-food">🍕 🍔 🍟</div>
      </section>

      <section className="menu" id="menu">
        <h2>Our Popular Foods</h2>

        <input
          className="search-box"
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="categories">
          {['All', 'Veg', 'Non-Veg'].map((item) => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="food-container">
          {filteredFoods.map((food) => (
            <div className="food-card" key={food.id}>
              <div className="food-emoji">{food.image}</div>
              <h3>{food.name}</h3>
              <p>Fresh and delicious</p>
              <h3>₹{food.price}</h3>
              <button onClick={() => addToCart(food)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Your Cart 🛒</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((food, index) => (
              <p key={index}>
                {food.image} {food.name} — ₹{food.price}
              </p>
            ))
          )}

          <h3>Total: ₹{total}</h3>
        </div>
      </section>

      <footer id="contact">
        <p>© 2026 Foodie | Made with ❤️</p>
      </footer>
    </div>
  )
}

export default App
