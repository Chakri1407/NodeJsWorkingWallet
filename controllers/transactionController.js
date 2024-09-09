const Transaction = require('../models/transactionModel');

exports.getAllTransactions = async (req, res) => {
  try {
    const queryObj = {...req.query};
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach(el => delete queryObj[el]);
    console.log(req.query);
    const transactions = await Transaction.find(req.query);
    res.status(200).json({
      status: 'Success',
      results: transactions.length,
      data: {
        transactions
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
  };
  
  exports.getTransaction = async (req, res) => {
  try {
    const tour = await Transaction.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: {
        tour,
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
  };
  
  exports.createTransaction = async (req, res) => {
    try {

      const newTransaction = await Transaction.create(req.body);
      res.status(201).json({
        status: 'Transaction is success',
        data: {
          transaction: newTransaction
        }
      });
      
    }catch(err){
      res.status(400).json({
        status: 'fail',
        message: err
      })
    }
    
  };