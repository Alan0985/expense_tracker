const TransactionModel = require("../models/TransactionModel");

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionModel.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addTransaction = async (req, res, next) => {
  try {
    const newTransaction = await TransactionModel.create(req.body);

    return res.status(201).json({
      success: true,
      data: newTransaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      //Map through the error array to get the message array
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
