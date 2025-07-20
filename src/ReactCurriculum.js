import React, { useState } from "react";
import "./ReactCurriculum.css";
const curriculum = [
  {
    title: "Introduction to React",
    topics: [
      {
        label: "What is React",
        topic: "Features of React",
      },
      {
        label: "SPAs vs. MPAs",
        topic: "Difference between Single page and Multi page applications",
      },
      {
        label: "How React works",
        topic: "How Virtual DOM and Babel are working under the hood?",
      },
      {
        label: "Creating First React Element",
        topic: "VS Code Basics, What is JSX?",
      },
      {
        label: "React Component",
        topic: "Functional Component, React Fragments, React dev tools",
      },
    ],
  },
  {
    title: "Learning JSX",
    topics: [
      {
        label: "JSX Expressions",
        topic:
          "Rendering Javascript inside JSX (Variables, data types, functions)",
      },
      {
        label: "Rendering Arrays and Objects",
        topic:
          "How to render list of items from an array (using map function) and objects rendering in React",
      },
      {
        label: "Conditional Rendering",
        topic: "Conditional rendering using Ternary, AND and OR operators",
      },
    ],
  },
  {
    title: "Score-Keeper App",
    topics: [
      {
        label: "Event Handling",
        topic: "How to handle events in JSX?",
      },
      {
        label: "Forms in JSX",
        topic: "How to tak input and display from data in JSX?",
      },
      {
        label: "Accessing Input Values",
        topic: "Using refs to access React elements",
      },
    ],
  },
  {
    title: "Create-React-App",
    topics: [
      {
        label: "CDNs and Webpack",
        topic: "Drawbacks of CDNs, Using Module Bundler in React Project",
      },
      {
        label: "Tools Installation",
        topic: "Installing required tools for creating a React Project",
      },
      {
        label: "Folder Structure",
        topic: "Understanding the folder and files structure",
      },
      {
        label: "Import/Export",
        topic: "How to import and export components in files?",
      },
    ],
  },
];

const ReactCurriculum = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="curriculum-container">
      <h2 className="curriculum-heading">📘 React Curriculum</h2>
      {curriculum.map((section, index) => (
        <div className="curriculum-section" key={index}>
          <button
            className="curriculum-toggle"
            onClick={() => toggleCollapse(index)}
          >
            {section.title}
          </button>
          {openIndex === index && (
            <ul className="curriculum-content">
              {section.topics.map((topic, idx) => (
                <>
                  <strong>{topic?.label}</strong>
                  <p
                    style={{
                      margin: 0,
                      marginBottom: "20px",
                      marginTop: "5px",
                    }}
                  >
                    {topic.topic}
                  </p>
                </>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReactCurriculum;
