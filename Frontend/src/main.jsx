import React from 'react'; // Uncomment if you need React for JSX transformations (depends on your setup)
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


// Find the root element in the HTML file
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a React root and render the App component
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
} else {
  console.error('Root element not found');
}