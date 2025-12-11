// import { useState } from "react";
// import "../styles/TaskInputFilter.css";

// const TaskInputFilter = ({ onFilterChange }) => {
// const [filterText, setFilterText] = useState("");

// const handleChange = (e) => {
// const value = e.target.value;
// setFilterText(value);
// if (onFilterChange) {
// onFilterChange(value);
// }
// };

// const handleReset = () => {
// setFilterText("");
// if (onFilterChange) {
// onFilterChange("");
// }
// };

// return (
// <div className="task-input-filter">
// <div className="task-input-filter__group">
// <label htmlFor="filterTxt" className="task-input-filter__label">
// Filter by name:
// </label>
// <input
// type="text"
// id="filterTxt"
// className="task-input-filter**input"
// placeholder="Search tasks..."
// value={filterText}
// onChange={handleChange}
// />
// </div>
// <button
// type="button"
// className="task-input-filter**btn task-input-filter\_\_btn--reset"
// onClick={handleReset}
// >
// Clear Filter
// </button>
// </div>
// );
// };

// export default TaskInputFilter;
