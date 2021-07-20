import {useState} from 'react';
import axios from 'axios';
const ProductForm = ({formSubmit, setFormSubmit}) => {
  const [errorState,setErrorState] = useState([])
  const [info,setInfo] = useState({
    title:"",
    price:0,
    description:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:8000/api/products/new',info)
    .then(msg =>{
      setFormSubmit(!formSubmit);
      setInfo({
    title:"",
    price:0,
    description:""
  })
    })
  .catch(err => {
                const {errors} = err.response.data
                
                const errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setErrorState(errorObj)
            })

  }
  function handleChange(e){
    const {name,value} = e.target
    setInfo({...info,[name]:value})
  }
  return (
    <form onSubmit={handleSubmit}>
    	<h1>Product Manager</h1>
    	<p>Title:
    		<input onChange={handleChange}type="text" value={info.title} name="title"/>
    	   {(errorState.title) && <p>{errorState.title}</p>}

      </p>
    	<p>price:
    		<input onChange={handleChange}type="number" value={info.price} name="price"/>
         {(errorState.price) && <p>{errorState.price}</p>}
    	
      </p>
    	<p>description:
    		<input onChange={handleChange}type="text" value={info.description} name="description"/>
         {(errorState.description) && <p>{errorState.description}</p>}
    	
      </p>
    	<input type="submit" value="create" className="btn btn-primary"/>
    </form>
  )
}

export default ProductForm;