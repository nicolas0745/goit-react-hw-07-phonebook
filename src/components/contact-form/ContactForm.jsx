import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { postContact } from '../../redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onHandlesubmit = e => {
    e.preventDefault();
    const contactToAdd = {
      name: e.currentTarget.elements[0].value,
      phone: e.currentTarget.elements[1].value,
    };

    if (
      contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() ===
          contactToAdd.name.toLocaleLowerCase()
      )
    ) {
      alert(contactToAdd.name + 'is already in contacts');
      return;
    }
    dispatch(postContact(contactToAdd));

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onHandlesubmit} className={css.form}>
      <label htmlFor="1" className={css.label}>
        Name
      </label>
      <input
        id="1"
        type="text"
        name="name"
        pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}"
        title="Name and Lastname Required or a valid fomat"
        required
      />
      <label htmlFor="2" className={css.label}>
        Number
      </label>
      <input
        id="2"
        type="tel"
        name="number"
        pattern="[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button>Add contact</button>
    </form>
  );
};

export { ContactForm };
