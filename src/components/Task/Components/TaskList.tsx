import TaskCard from "./TaskCard";
import type { TaskType } from "../../../types";
import { tasks } from "../../../data";
import TaskDeleteButton from "./TaskDeleteButton";
import "../Styles/TaskList.css";

const TaskList = () => {
  return (
    <div className="task-list">
      <div className="task-list__card">
        {tasks.map((task: TaskType) => (
          <div className="task-list__item ">
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              completed={task.completed}
            />

            <div className="task-list__buttons">
              <TaskDeleteButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
