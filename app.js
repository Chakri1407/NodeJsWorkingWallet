const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appErros');
const transactionRouter = require('./routes/transactionRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {    
  console.log("Hello from the middleware 👋");
  next();                        
}) 

app.use((req, res, next) => {    
  req.requestTime = new Date().toISOString();
  next();
}) 



// Route handlers

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);

// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// Routes 



app.use('/api/v1/transaction', transactionRouter);
app.use('/api/v1/users', userRouter);

app.all('*',(req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: 'cannot find the requested url on this server '
  // });

  next(new AppError('cannot find the requested url on this server',404));
})

app.use((err,req,res,next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;