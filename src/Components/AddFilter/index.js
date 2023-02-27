import PropTypes from 'prop-types'
export const AddFilter = ({ categories }) => {
  return (
    <form>
      <label htmlFor="filter">select category</label>
      <select name="filter">
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <button>select</button>
    </form>
  );
};

AddFilter.propTypes = {
  categories: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
}