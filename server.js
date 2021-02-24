const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
app.use(express.static(path.resolve('client/build/')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.get('/downloadFile',async (req, res)=>{
  const response = await fetch('http://www.filltext.com/?rows=160&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
	const result = await response.json()
	res.send(result)
})


const root = path.join(process.env.PWD, 'client', 'build');
app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});
// app.get('*', (req, res) => {
// 	   res.sendFile(path.resolve('client/build/index.html'))
// 	 })
const PORT = 8080
app.listen(PORT, console.log(`server is work ${PORT}`));

