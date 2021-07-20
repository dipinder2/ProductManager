import {useState} from 'react';
import axios from 'axios';
const ProductForm = ({p}) => {

  const [info,setInfo] = useState({})
  const [formSubmit, setFormSubmit] = p
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(!formSubmit);
    axios.post('http://localhost:8000/api/products/new',info)
    .then(msg =>console.log(msg.data))
    .catch(err => console.log(err))
  }
  function handleChange(e){
    const {name,value} = e.target
    setInfo({...info,[name]:value})
  }
  return (
    <form onSubmit={handleSubmit}>
    	<h1>Product Manager</h1>
    	<p>Title:
    		<input onChange={handleChange}type="text" name="title"/>
    	</p>
    	<p>price:
    		<input onChange={handleChange}type="number" name="price"/>
    	</p>
    	<p>description:
    		<input onChange={handleChange}type="text" name="description"/>
    	</p>
    	<input type="submit" value="create" className="btn btn-primary"/>
    </form>
  )
}

export default ProductForm;