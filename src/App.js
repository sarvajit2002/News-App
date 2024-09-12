// Importing necessary files and libraries
import './App.css'; // Importing CSS for styling
import React, { Component } from 'react'; // Importing React and Component for class-based component creation
import Navbar from './components/Navbar'; // Importing the Navbar component
import News from './components/News'; // Importing the News component
import LoadingBar from 'react-top-loading-bar'; // Importing a top loading bar to show loading progress

import {
  BrowserRouter as Router, // Using BrowserRouter for routing
  Route, // Route to define the route path and component mapping
  Routes // Routes to wrap all the Route components
} from "react-router-dom";

export default class App extends Component {
  // Defining properties for the App component
  pageSize = 5; // Number of articles to fetch per page
  apiKey = process.env.REACT_APP_NEWS_API; // API key stored in environment variables for security
  
  state = {
    progress: 0 // State to manage the loading progress bar
  }

  // Function to update the progress value in the state
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  // Rendering the component's UI
  render() {
    return (
      // Using Router to handle navigation between different components
      <Router>
        <div>
          {/* Rendering the Navbar component */}
          <Navbar />

          {/* Loading bar component to show loading progress */}
          <LoadingBar
            height={3} // Height of the progress bar
            color='#f11946' // Color of the progress bar
            progress={this.state.progress} // The progress value from the state
          />

          {/* Defining different routes for different categories */}
          <Routes>
            <Route exact path="/business" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
            
            <Route exact path="/entertainment" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />

            <Route exact path="/general" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />

            <Route exact path="/health" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />

            <Route exact path="/science" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" 
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
