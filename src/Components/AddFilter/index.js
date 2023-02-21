export const AddFilter = ({ categories, setCategories }) => {
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
