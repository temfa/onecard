import axios from 'axios'

let BASE_URL = 'https://onecard.factorialsystems.io'
const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const instance = axios.create({
    baseURL: `${BASE_URL}/api/v1`,
    timeout: 0,
    headers: { "Content-Type": "application/json" }
})

const ApiService = {
    HttpMethods,
    instance
}

export default ApiService
