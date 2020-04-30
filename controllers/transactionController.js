exports.getTransactions = (req, res, next) => {
  res.send("Get Transactions");
};

exports.addTransaction = (req, res, next) => {
  res.send("Post Transaction");
};

exports.deleteTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
