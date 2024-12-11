import React from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

const Column = ({ status, tasks, onDrop }) => {
  const [, ref] = useDrop({
    accept: "TASK",
    drop: (item) => onDrop(item.id, status),
  });

  return (
    <div ref={ref} className="kanban-column">
      <h3>{status}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
