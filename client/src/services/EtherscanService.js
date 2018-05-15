import EtherscanApi from '@/services/EtherscanApi'

export default {
  fetchTransactions (p) {
    return EtherscanApi().get('', { params: p })
  }
}
