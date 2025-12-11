import "../Styles/TaskCard.css";
import type { TaskType } from "../../../types";

export const TaskCard = (task: TaskType) => {
  return (
    <div className="task-card">
      <p>{task.id}</p>
      <h3 className="task-card__title">{task.title}</h3>
      <p className="task-card__description">{task.description}</p>
      <p className="task-card__completed">
        {task.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
};

export default TaskCard;
// todo: implement date
/*
{new Date(purchase.date).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
*/
