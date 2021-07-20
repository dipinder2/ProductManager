const express = require('express')
const cors = require('cors')
const app = express()

require("./configs/mongoose.configs");

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json(), 
express.urlencoded({ 
	extended: true 
}));

const productsRouter = require('./routes/product.routes')
app.use('/api/',productsRouter)

app.listen(8000, 
() => console.log("The server is all fired up on port 8000"));
