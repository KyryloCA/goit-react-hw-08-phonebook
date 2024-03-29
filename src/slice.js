import {
  addContactOBJ,
  addUserOBJ,
  deleteContactByID,
  fetchContacts,
  loginUserOBJ,
  logoutUserToken,
} from 'operations';

import { toast } from 'react-toastify';
const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = '';
export const clearUserStore = () => {
  return { type: 'user/clearUserStore' };
};
const contactsSlice = createSlice({
  name: 'contactsStore',
  initialState: { contacts: [], error: '', pending: false, authFail: '' },

  reducers: {
    removeContactRedux: state => {
      state.contacts = [];
      state.pending = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.pending = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        if (action.payload) {
          state.contacts.push(...action.payload);
          state.authFail = '';
        }
        state.pending = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        if (
          action.error.message &&
          action.error.message === 'Please authenticate'
        ) {
          console.log('found');
          state.authFail = action.error.message;

          //clear user store in some way
        }

        state.pending = false;
      })
      .addCase(deleteContactByID.pending, state => {
        state.pending = true;
      })
      .addCase(deleteContactByID.fulfilled, (state, action) => {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload.id
          ),
          pending: false,
        };
      })
      .addCase(deleteContactByID.rejected, state => {
        state.error = 'Error occurred while deleting contact.';
        state.pending = false;
      })
      .addCase(addContactOBJ.pending, state => {
        state.pending = true;
      })
      .addCase(addContactOBJ.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.pending = false;
      })
      .addCase(addContactOBJ.rejected, state => {
        state.error = 'Error occurred while adding contact.';
        state.pending = false;
      });
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilterRedux(state, action) {
      return action.payload;
    },
  },
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: {}, token: '' },
  reducers: {
    autoLogOut: state => {
      console.log('actio!!!');
      state.user = {};
      state.token = '';
      state.pending = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addUserOBJ.pending, state => {
        state.pending = true;
      })
      .addCase(addUserOBJ.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        // Dispatch loginUserOBJ action with the userOBJ
        loginUserOBJ({
          user: action.payload.user,
          token: action.payload.token,
        });
        state.pending = false;
      })
      .addCase(addUserOBJ.rejected, (state, action) => {
        toast.error(action.error.message);
        state.pending = false;
      })
      .addCase(loginUserOBJ.pending, state => {
        state.pending = true;
      })
      .addCase(loginUserOBJ.fulfilled, (state, action) => {
        if (action.payload && action.payload.user && action.payload.token) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.pending = false;
        } else {
          toast.error('Check email and password, please');
        }
      })
      .addCase(loginUserOBJ.rejected, state => {
        state.error = 'Error occurred while logging in user.';
        toast.error('Check email and password, please');
        state.pending = false;
      })
      .addCase(logoutUserToken.pending, state => {
        state.pending = true;
      })
      .addCase(logoutUserToken.fulfilled, (state, action) => {
        state.user = {};
        state.token = '';
        state.pending = false;
      })
      .addCase(logoutUserToken.rejected, state => {
        state.user = {};
        state.token = '';
        state.pending = false;
        state.error = 'Error occurred while logging out user.';
        state.pending = false;
      });
  },
});

export const { removeContactRedux } = contactsSlice.actions;
export const { addFilterRedux } = filterSlice.actions;
export const { autoLogOut } = userSlice.actions;
export const filterReducer = filterSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
export const userReducer = userSlice.reducer;
