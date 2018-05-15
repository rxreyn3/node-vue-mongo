<template>
  <div class="transactions">
    <h1>Transactions</h1>
    <div v-if="transactions.length > 0" class="table-wrap">
      <table>
        <tr>
          <td>From</td>
          <td>To</td>
          <td>Value</td>
        </tr>
        <tr v-for="transaction in transactions" :key="transaction.hash">
          <td>{{ transaction.from }}</td>
          <td>{{ transaction.to }}</td>
          <td>{{ transaction.value }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'addpost' }" class="add_post_link">Add Post</router-link>
    </div>
  </div>
</template>

<script>
import EtherscanService from '@/services/EtherscanService'
export default {
  name: 'transactions',
  data () {
    return {
      transactions: []
    }
  },
  mounted () {
    this.getTransactions()
  },
  methods: {
    async getTransactions () {
      const response = await EtherscanService.fetchTransactions({
        module: 'account',
        action: 'txlist',
        address: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
        sort: 'asc',
        apikey: 'CQ6UT4MA3Q5N6QKZ338IHNGJVEDEEVPK8X'
      })
      this.transactions = response.data.result
      console.log(response)
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
