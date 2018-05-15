var axios = require('axios')
var Transaction = require('../models/transaction')

module.exports = {
    fetchTransactions(address) {
        axios.get('https://api.etherscan.io/api', {
                params: {
                    module: 'account',
                    action: 'txlist',
                    address: address
                }
            })
            .then(function (response) {
                var inserts = response.data.result;
                Transaction.insertMany(inserts, function (err) {
                    if (err) {
                        console.error(err)
                    }
                })
                return inserts
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}