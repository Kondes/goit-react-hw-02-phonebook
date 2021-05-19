import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.list}>
      {name}: {number}
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;
