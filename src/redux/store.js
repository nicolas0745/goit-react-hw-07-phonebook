import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// let prevState = store.getState();

// store.subscribe(() => {
//   const currentState = store.getState();

//   if (prevState.contacts !== currentState.contacts) {
//     localStorage.setItem(
//       'contacts',
//       JSON.stringify(currentState.contacts.contactsList)
//     );
//   }
//   prevState = currentState;
// });
