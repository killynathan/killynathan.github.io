import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Project from "./components/Project";

const projects = [
  {
    title: "Personality.ai",
    description: "Lookup the personality of a social media profile",
    github: "https://github.com/killynathan/personalityAnalyzer",
    link: "https://personality-ai.herokuapp.com/",
    height: 150
  },
  {
    title: "Personality Tracker",
    description: "Keep track of how much work you have done",
    github: "https://github.com/killynathan/productivityTracker",
    link: "https://killynathan.github.io/productivityTracker",
    height: 120
  },
  {
    title: "Bouncem",
    description: "A multiplayer PvP game where you bounce your way to victory",
    github: "https://github.com/killynathan/bouncem",
    link: "https://bouncem.herokuapp.com/",
    height: 130
  },
  {
    title: "WATCHIT",
    description: "Find and learn about movies",
    github: "https://github.com/killynathan/watchit",
    link: "https://killynathan.github.io/watchit",
    height: 180
  },
  {
    title: "Pomodoro",
    description: "Lookup the personality of a social media profile",
    github: "https://github.com/killynathan/Pomodoro",
    link: "https://killynathan.github.io/Pomodoro",
    height: 190
  },
  {
    title: "Quote Generator",
    description: "Find a quote to pick you up",
    github: "https://github.com/killynathan/quote-generator",
    link: "https://killynathan.github.io/quote-generator",
    height: 200
  },
  {
    title: "Snake",
    description: "Basic snake game",
    github: "https://github.com/killynathan/snake",
    link: "https://killynathan.github.io/snake",
    height: 150
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div id="projects">
            {projects.map(project => (
              <div
                className="project-wrapper"
                style={{ height: project.height }}
                key={project.title}
              >
                <Project {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
