# Todo Application

This is a simple and intuitive Todo application built with React that allows users to manage their tasks efficiently. Users can add, edit, delete, complete, and search tasks. The search functionality uses URL parameters, enabling users to share search URLs and retain search terms.

## Overview

The Todo application is designed to help users manage their daily tasks with ease. It features:
- Adding new tasks
- Editing existing tasks
- Deleting tasks
- Marking tasks as completed
- Searching for tasks using URL parameters

## System Design

### Components

1. **App**: The main component that sets up the React Router and defines the routes.
2. **TodoWrapper**: Manages the state of the todos and handles the core functionalities such as adding, editing, deleting, and searching tasks.
3. **TodoForm**: A form component for adding new tasks.
4. **EditTodoForm**: A form component for editing existing tasks.
5. **Todo**: Displays individual tasks with options to edit, delete, and mark as completed.
6. **SearchTask**: A search bar component that filters tasks based on the search term.

### State Management

- The application's state is managed using React's `useState` and `useEffect` hooks.
- The search term is synchronized with the URL parameters using `useSearchParams` from `react-router-dom`.

### Styling

- The application is styled using CSS with a modern design.
- Fonts are imported from Google Fonts and icons from Font Awesome.

## Implementation

### Adding a Task

- Users can add a new task using the `TodoForm` component.
- Each task is assigned a unique ID using `uuidv4` and the current timestamp as the last updated time.

### Editing a Task

- Users can edit an existing task using the `EditTodoForm` component.
- The task details and last updated time are updated upon editing.

### Deleting a Task

- Users can delete a task by clicking the delete icon (`fa-trash`).
- The task is removed from the state and the UI updates accordingly.

### Marking a Task as Completed

- Users can mark a task as completed by clicking the check icon (`fa-check`).
- The task's `completed` status is toggled and the UI reflects the change.

### Searching for Tasks

- The search functionality is provided by the `SearchTask` component.
- The search term is synchronized with the URL parameters, allowing users to share search URLs.
- Tasks are filtered based on the search term and only matching tasks are displayed.

## Setup and Run

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/todo-app.git

2. Navigate to the project directory:

   cd todo-app

3. Install the dependencies:

   npm install

4. Running the Application

   1.Start the development server:
           npm start

   2.Open your browser and navigate to:
           http://localhost:3000

5. Build for Production
   
   npm run build
