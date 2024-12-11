# Kanban Board Application

A React.js application for managing tasks using a Kanban board. This board allows users to manage tasks across different stages: **To Do**, **In Progress**, **Peer Review**, and **Done**. It features drag-and-drop functionality for task movement, a search bar for filtering tasks, and the ability to add new tasks.

## Features
- **Task Management**: View and manage tasks in four distinct columns.
- **Drag and Drop**: Seamlessly move tasks between stages.
- **Search Functionality**: Filter tasks by title using a search bar.
- **Add New Tasks**: Create new tasks directly in the "To Do" column.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Project Structure
```
kanban-board/
├── public/
├── src/
│   ├── components/
│   │   ├── KanbanBoard.js
│   │   ├── KanbanColumn.js
│   │   ├── TaskCard.js
│   │   └── NewTaskForm.js
│   ├── styles/
│   │   ├── KanbanBoard.css
│   │   ├── KanbanColumn.css
│   │   └── TaskCard.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/kanban-board.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kanban-board
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production
To create a production build:
```bash
npm run build
# or
yarn build
```

## Components

### `KanbanBoard`
- Manages the overall layout of the Kanban board and the state of tasks.

### `KanbanColumn`
- Represents a single column (stage) on the board, e.g., "To Do" or "In Progress".

### `TaskCard`
- Displays individual task details and allows drag-and-drop functionality.

### `NewTaskForm`
- Provides a form to create new tasks in the "To Do" column.

## Styling
Custom CSS files are used for styling the components. These files can be found in the `src/styles/` directory:
- **KanbanBoard.css**: Styles for the overall board layout.
- **KanbanColumn.css**: Styles for each column.
- **TaskCard.css**: Styles for task cards.

## Dependencies
- React.js
- React DnD (Drag and Drop)
- CSS Modules or regular CSS for styling

Install dependencies with:
```bash
npm install react-dnd react-dnd-html5-backend
```

## Future Enhancements
- Add task priority and due dates.
- Include user assignments for tasks.
- Implement persistence using a backend API or localStorage.
- Add animations for smoother transitions.

## License
This project is licensed under the MIT License. Feel free to use and modify it for your projects.

## Contributing
Contributions are welcome! Please submit a pull request or raise an issue to discuss your ideas.

---

**Happy Task Managing!**

