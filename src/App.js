import React, { useState } from "react";
import "./App.css";
import Project from "./components/Project";
import BlogPosts from "./components/BlogPosts";
import works from "./works";

const App = () => {
  const [tab, setTab] = useState("works");
  const inWorks = tab === "works";
  const inBlog = tab === "blog";
  const rows = works.reduce(
    (acc, project, i) => {
      console.log("!!", acc);
      acc[i % 3].push(project);
      return acc;
    },
    [[], [], []]
  );
  return (
    <div className="App">
      <div className="content">
        <div
          style={{ paddingTop: 50, display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ color: "rgb(66, 133, 244)", marginBottom: 20 }}>
            Nate K.
          </h2>
          <p style={{ color: "white", marginBottom: 5 }}>
            Developer interested in Javascript and React.js
          </p>
          <a
            style={{
              color: "white",
              textDecoration: "underline",
              marginBottom: 30
            }}
            href="https://github.com/killynathan"
            target="_blank"
          >
            github
          </a>
          <p style={{ color: "white", marginBottom: 5, alignSelf: "center" }}>
            <span
              style={{
                ...(inWorks && {
                  fontWeight: "bold",
                  color: "rgb(66, 133, 244)"
                }),
                cursor: "pointer"
              }}
              onClick={() => setTab("works")}
            >
              Works
            </span>
            <span style={{ fontSize: 12, marginLeft: 10, marginRight: 10 }}>
              |
            </span>
            <span
              style={{
                ...(inBlog && {
                  fontWeight: "bold",
                  color: "rgb(66, 133, 244)"
                }),
                cursor: "pointer"
              }}
              onClick={() => setTab("blog")}
            >
              Blog
            </span>
          </p>
        </div>
        {inWorks && (
          <div className="App-header">
            <div id="projects">
              {rows.map((row, i) => (
                <div className="projects-row" key={i}>
                  {row.map(project => (
                    <div className="project-wrapper">
                      <Project {...project} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {inBlog && <BlogPosts />}
      </div>
    </div>
  );
};

export default App;
