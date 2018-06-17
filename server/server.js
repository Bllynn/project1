const express = require('express');
const bodyParser=require('body-parser');

const app=express();
const port = 3018;
const carsController = require('./controllers/carsController')
app.use(bodyParser.json());





        

app.get = (`/api/all_cars`,carsController.read)
app.put = ('/api/all_cars',carsController.changeStatus)


app.listen(port,() =>{console.log(`Server is listening on port ${port}`)})