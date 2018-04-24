import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

export async function findAllGenres() {
  let response = await axios.get(`${ENDPOINT}/api/genres`, {
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    }
  });

  return response.data;
}

export async function createGenre(name) {
  let response = await axios.post(`${ENDPOINT}/api/genres`, { name }, {
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    }
  });

  return response.data;
}
