import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
