import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://api.etherscan.io/api/`
  })
}
