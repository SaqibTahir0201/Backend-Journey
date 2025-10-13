//1 Application-level middleware
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('App-level middleware');
  next();
});


// You can also limit it to specific routes:

app.use('/api', (req, res, next) => {
  console.log('Runs only for /api/*');
  next();
});

//2 Router-level middleware

const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware');
  next();
});

router.get('/users', (req, res) => {
  res.send('User route');
});

app.use('/api', router);

// 3️⃣ Error-handling middleware

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

// 4️⃣ Built-in middleware
app.use(express.json());          // parse JSON request body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded data
app.use(express.static('public')); // serve static files


// 5️⃣ Third-party middleware

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));  // logs requests
app.use(cors());         // enables Cross-Origin Resource Sharing
