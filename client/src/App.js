import './App.css';
import axios from 'axios'
import {useState} from 'react'
import {Router,navigate} from '@reach/router'
import ProductForm from './components/ProductForm'
import Display from './components/Display'
import Detail from './components/Detail'
import Edit from './components/Edit'
function App() {


  const [formSubmit, setFormSubmit] = useState(false)
  const [products, setProducts] = useState([])
  const handleDelete = (id) => {
    console.log("i delete")
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(confirmation=>{
      setFormSubmit(!formSubmit)
    })
    .catch(err =>console.log(err))
  }

  return (
    <div className="App">
        <Router>

          <Display path="/" 
            handleDelete={handleDelete}
           formSubmit = {formSubmit} 
           setFormSubmit={setFormSubmit} 
           products={products} 
           setProducts={setProducts} />

          <Detail path="/detail/:id"/>
          <Edit path="/edit/:id"/>
        </Router>
    </div>
  );
}

export default App;
