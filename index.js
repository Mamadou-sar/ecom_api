const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');

const PORT = process.env.PORT || 5500;
dotenv.config();
const app = express();

//middlewere
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose
   .connect(process.env.MONGO_DB_URL)
   .then(() => console.log('Mongo DB connection is successfull !'))
   .catch((err) => console.log(err));

//All API Route Goes here
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
