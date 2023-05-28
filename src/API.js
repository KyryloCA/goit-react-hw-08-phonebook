import axios from 'axios';
// const BASE_URL = 'https://646782d2ba7110b663bb07b6.mockapi.io/';

const BASE_CONNECTIONS_API_URL = 'https://connections-api.herokuapp.com';

/////---------------------------------------------------------

async function deleteContacts_API({ id, token }) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts/${id}`;
  return axios
    .delete(colectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(r => r.data);
}

async function getContacts_API(token) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts`;
  return axios
    .get(colectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(r => r.data);
}

async function addContact_API(contactOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts`;
  return axios
    .post(colectedURL, contactOBJ.contact, {
      headers: {
        Authorization: `Bearer ${contactOBJ.token}`,
      },
    })
    .then(r => r.data);
}

async function createUser_API(userOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/signup`;
  return axios.post(colectedURL, userOBJ).then(r => r.data);
}

async function loginUser_API(userOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/login`;
  return axios.post(colectedURL, userOBJ).then(r => r.data);
}

async function logoutUser_API(userOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/logout`;
  return axios
    .post(
      colectedURL,
      {},
      {
        headers: {
          Authorization: `Bearer ${userOBJ}`,
        },
      }
    )
    .then(r => r.data);
}

export {
  getContacts_API,
  deleteContacts_API,
  addContact_API,
  createUser_API,
  loginUser_API,
  logoutUser_API,
};
