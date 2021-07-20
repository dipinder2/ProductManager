import './App.css';
import {useState} from 'react'
import {Router} from '@reach/router'
import ProductForm from './components/ProductForm'
import Display from './components/Display'
import Detail from './components/Detail'
function App() {


  const [formSubmit, setFormSubmit] = useState(false)
  const [products, setProducts] = useState([])


  return (
    <div className="App">
          <ProductForm p={[formSubmit, setFormSubmit]}/>
        <Router>
          <Display path="/" formSubmit={formSubmit} p={[products, setProducts]} />
          <Detail path="/detail/:id"/>
        </Router>
    </div>
  );
}

export default App;
