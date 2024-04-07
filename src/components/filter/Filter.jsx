import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../redux/contactsSlice';
import { getStatusFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const onHandleChange = e => {
    dispatch(searchContact(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={css.container_filter}>
      <label>Find contacts by Name</label>
      <input
        id="1"
        type="text"
        name="filter"
        value={filter}
        required
        onChange={onHandleChange}
      />
    </div>
  );
};

export { Filter };
