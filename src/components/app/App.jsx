import { ContactForm } from '../contact-form/ContactForm';
import { ContactList } from '../contact-list/ContactList';
import { getIsLoading, getError } from '../../redux/selectors';
import { Filter } from '../filter/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.div_container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>error : {error}</p>
      ) : (
        <>
          <Filter /> <ContactList />
        </>
      )}
    </div>
  );
};

export { App };
