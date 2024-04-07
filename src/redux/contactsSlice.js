import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, postContact, deleteContact } from './operations';
const handlePending = state => {
  state.contactsList.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contactsList.isLoading = false;
  state.contactsList.error = action.payload;
};

const initialContactsState = {
  contactsList: { items: [], isLoading: false, error: null },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.contactsList.push(action.payload);
    //   },
    //   prepare({ id, name, number }) {
    //     return {
    //       payload: {
    //         id,
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    searchContact(state, action) {
      state.filter = action.payload;
    },
    // deleteContact(state, action) {
    //   const index = state.contacts.findIndex(e => e.id === action.payload);
    //   state.contacts.splice(index, 1);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(postContact.pending, handlePending)
      .addCase(postContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contactsList.isLoading = false;
        state.contactsList.error = null;
        state.contactsList.items = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contactsList.isLoading = false;
        state.contactsList.error = null;
        state.contactsList.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contactsList.isLoading = false;
        state.contactsList.error = null;
        const index = state.contactsList.items.findIndex(
          e => e.id === action.payload
        );
        state.contactsList.items.splice(index, 1);
      });
  },
});

export const { searchContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
