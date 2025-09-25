import './App.css'
import { ProductList } from './components/ProductList'
import { Cart } from './components/cart'
import { Header } from './components/Header'

function App() {
  return (
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
  )
}
export default App
