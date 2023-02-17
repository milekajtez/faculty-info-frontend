import axios from 'axios';

// change port...for now only localhost
export default axios.create({
  baseURL: 'http://localhost:8452/api/'
});
