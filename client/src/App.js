import './App.css';
import {useState} from 'react'
import ProductForm from './components/ProductForm'
function App() {
  const [formSubmit, setFormSubmit] = useState(false)
  return (
    <div className="App">
        <ProductForm p={[formSubmit, setFormSubmit]}/>
    </div>
  );
}

export default App;
