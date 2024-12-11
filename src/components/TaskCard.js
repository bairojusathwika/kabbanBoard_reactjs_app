import React from "react";
import { useDrag } from "react-dnd";
import "./TaskCard.css"; // Optional: Separate style file for task cards

const TaskCard = ({ task }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id },
  });

  return (
    <div ref={ref} className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description.slice(0, 50)}...</p>
    </div>
  );
};

export default TaskCard;
