var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  blockHash: { type: [String], index: true, unique: true },
  blockNumber: String,
  confirmations: String,
  contractAddress: String,
  cumulativeGasUsed: String,
  from: String,
  gas: String,
  gasPrice: String,
  gasUsed: String,
  hash: String,
  input: String,
  isError: String,
  nonce: String,
  timeStamp: String,
  to: String,
  transactionIndex: String,
  txreceipt_status: String,
  value: String
});

var Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
