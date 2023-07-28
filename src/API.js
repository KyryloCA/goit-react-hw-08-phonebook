import axios from 'axios';
// const BASE_URL = 'https://646782d2ba7110b663bb07b6.mockapi.io/';

const BASE_CONNECTIONS_API_URL = 'https://connections-api.herokuapp.com';

/////---------------------------------------------------------

// function errorPreprocessor(error) {
//   if (error.response.data.message) {
//     throw error.response.data.message;
//   } else if (error.message) {
//     throw error.message;
//   } else {
//     throw new Error('Unexpected error');
//   }
// }
function errorPreprocessor(error) {
  return error.response.status;
}

async function deleteContacts_API({ id, token }) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts/${id}`;
  return axios
    .delete(colectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}

async function getContacts_API(token) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts`;
  return axios
    .get(colectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}

async function addContact_API(contactOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/contacts`;
  return axios
    .post(colectedURL, contactOBJ.contact, {
      headers: {
        Authorization: `Bearer ${contactOBJ.token}`,
      },
    })
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}

async function createUser_API(userOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/signup`;
  return axios
    .post(colectedURL, userOBJ)
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}

async function loginUser_API(userOBJ) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/login`;
  return axios
    .post(colectedURL, userOBJ)
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
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
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}
async function checkTokenValidity_API(token) {
  const colectedURL = `${BASE_CONNECTIONS_API_URL}/users/current`;
  return axios
    .get(colectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(r => r.data)
    .catch(error => {
      errorPreprocessor(error);
    });
}

export {
  getContacts_API,
  deleteContacts_API,
  addContact_API,
  createUser_API,
  loginUser_API,
  logoutUser_API,
  checkTokenValidity_API,
};
