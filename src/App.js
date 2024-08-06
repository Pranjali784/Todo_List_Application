// Import necessary modules and styles
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';

// Define the main App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<TodoWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component as default
export default App;
