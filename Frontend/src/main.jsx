
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
import CartProvider from './context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <div className='dark:bg-slate-900 dark:text-white'>
          <App />
        </div>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
    
  
)
