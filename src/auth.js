import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

export async function attempt(username, password) {
  let { data } = await axios.post(`${ENDPOINT}/oauth/token`, {
    username,
    password,
    grant_type: 'password'
  });

  let { access_token: token } = data;
  localStorage.setItem('token', token);
  return data;
}

export async function logout() {
  // blacklist token?
  localStorage.removeItem('token');
}
