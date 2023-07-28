import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact_API,
  checkTokenValidity_API,
  createUser_API,
  deleteContacts_API,
  getContacts_API,
  loginUser_API,
  logoutUser_API,
} from 'API';

export const fetchContacts = createAsyncThunk('contactsFetchAll', token => {
  return getContacts_API(token);
});
export const deleteContactByID = createAsyncThunk(
  'deleteContactByID',
  removedContactOBJ => deleteContacts_API(removedContactOBJ)
);
export const addContactOBJ = createAsyncThunk('addContactOBJ', contactObj =>
  addContact_API(contactObj)
);
export const addUserOBJ = createAsyncThunk('addUserOBJ', userOBJ =>
  createUser_API(userOBJ)
);
export const loginUserOBJ = createAsyncThunk('loginUserOBJ', userOBJ =>
  loginUser_API(userOBJ)
);
export const logoutUserToken = createAsyncThunk('logoutUserToken', userToken =>
  logoutUser_API(userToken)
);
export const checkTokenValidity = createAsyncThunk('tokenValidity', userToken =>
  checkTokenValidity_API(userToken)
);
