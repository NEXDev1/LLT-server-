const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');''
const dotenv = require("dotenv");
const app = express();
const connectDB = require('./database/mongoConnection');

const authRoutes = require('./routes/authRoute');
const agentRoutes = require('./routes/agentRoute');
const adminRoutes = require('./routes/adminRoute');

connectDB()
dotenv.config();

// const corsOptions = {
//   origin: 'http://localhost:3000', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/admin',adminRoutes)

app.use('/api/agent', agentRoutes);

app.listen(process.env.PORT,() => console.log(`Server is running on port ${process.env.PORT}`));
