import axios from 'axios';

const api = () => {
  let baseURL = 'https://opentdb.com/api.php';
  const clienteAxios = axios.create({
    baseURL,
  });
  console.log('endpoint => ' + baseURL);
  return clienteAxios;
};

export default api;