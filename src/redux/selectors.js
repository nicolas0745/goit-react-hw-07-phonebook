export const getContacts = state => state.contacts.contactsList.items;
export const getStatusFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.contactsList.isLoading;
export const getError = state => state.contacts.contactsList.error;
