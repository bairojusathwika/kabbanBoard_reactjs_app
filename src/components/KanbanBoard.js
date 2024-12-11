import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import initialTasks from "../state/initialTasks";
import "./KanbanBoard.css";

const statuses = ["To Do", "In Progress", "Peer Review", "Done"];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [isFormVisible, setFormVisible] = useState(false);

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  const handleDrop = (id, newStatus) => {
    moveTask(id, newStatus);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: newTask.title,
        description: newTask.description,
        status: "To Do",
      },
    ]);
    setNewTask({ title: "", description: "" });
    setFormVisible(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="kanban-board">
        <header>
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
        <div className="kanban-columns">
          {statuses.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={filteredTasks.filter((task) => task.status === status)}
              onDrop={handleDrop}
            />
          ))}
        </div>
        {isFormVisible && (
          <div className="new-task-form">
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            ></textarea>
            <button onClick={handleAddTask}>Add Task</button>
          </div>
        )}
        <button className="floating-button" onClick={() => setFormVisible(true)}>
          + Add Task
        </button>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
