import axios from "axios";

const instance = axios.create({
  baseURL: 'http://165.227.177.3:8001'
})

export {instance as Axios}