const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require("cors");
const cricketLawRoutes = require("./routes/cricketlawRoutes");
const PORT = 3000;

dotenv.config();
app.use(express.json());
app.use(cors());

//momgooDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // ✅ Fixed env var name
  .then(() => console.log('MongoDB is connected'))
  .catch((err) => console.error("MongoDB connection failed", err));


app.get('/',(req,res)=> {
  res.status(200).send('Hey, This is Harikrishna Reddy');
})

// Basic /ping route
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

//Routes
app.use("/cricket-laws", cricketLawRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});