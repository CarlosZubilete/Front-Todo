import { MdDelete } from "react-icons/md";

const TaskDeleteButton = () => {
  const handleClick = async () => {
    console.log("HandleClick = ");
  };
  return (
    <button
      className="task-list__buttons-delete"
      onClick={handleClick}
      // aria-label={`Delete client ${purchase.name }`}
    >
      <MdDelete className="task-list__buttons-delete-icon" />
    </button>
  );
};

export default TaskDeleteButton;
