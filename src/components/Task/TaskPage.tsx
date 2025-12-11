import { useState } from "react";
import { Link } from "react-router";
import { IoIosAddCircle } from "react-icons/io";
import TaskList from "./Components/TaskList";
import TaskInputFilter from "./Components/TaskInputFIlter.tsx";

const TaskPage = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  return (
    <div className="task-page">
      <div className="task-page__container">
        <aside className="task-page__sidebar">
          {/* BUTTON ADD */}
          <div className="task-page__header">
            <h4 className="task-page__title">Add Task</h4>
            <Link to="/add-task" title="Add Task">
              <button className="task-page__btn">
                <IoIosAddCircle className="task-page__icon" />
              </button>
            </Link>
          </div>

          {/* FILTER COMPONENT */}
          <TaskInputFilter />
        </aside>
      </div>
      <h1>Task Page</h1>
      <p>This is the task page for showcasing various features.</p>

      <TaskList />
    </div>
  );
};
export default TaskPage;
