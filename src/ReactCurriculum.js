import React, { useState } from "react";
import "./ReactCurriculum.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  {
    title: "React Components - 1",
    topics: [
      {
        label: "Class Based Components",
        topic: "How to create class based components?",
      },
      {
        label: "Movie-App Project",
        topic: "Creating and adding functionalities to Movie App",
      },
      {
        label: "State in React",
        topic: "Adding state to components",
      },
    ],
  },
  {
    title: "React Components - 2",
    topics: [
      {
        label: "PROPS",
        topic: "What are props and how do we work with them",
      },
    ],
  },
  {
    title: "Styling in React",
    topics: [
      {
        label: "Drawbacks of global scope of styling file (CSS)",
        topic: "Understanding CSS Scope to avoid colashes in classNames",
      },
      {
        label: "Limiting the scope of styling using inLine styling",
        topic:
          "Creating inline styles for the elements, styling objects in the component.",
      },
      {
        label: "Styled Components",
        topic: "Writing styled components to limit the scope of styling",
      },
      {
        label: "Dynamic Styling",
        topic:
          "Styling Application based on a condition using styled-components",
      },
      {
        label: "CSS Modules",
        topic: "Modern styling techniques used by developers",
      },
    ],
  },
  {
    title: "Component Lifecycle Methods",
    topics: [
      {
        label: "COMPONENT LIFECYCLE",
        topic: "Learning about lifecycle of a React component",
      },
      {
        label: "Mounting Phase",
        topic: "Lifecycle methods involved during execution and their order",
      },
      {
        label: "Side Effects",
        topic: "How and where to perform side effects",
      },
      {
        label: "Updating Phase",
        topic: "Methods involved in the updating phase",
      },
      {
        label: "Un-mounting Phase",
        topic: "Performing clean-ups during un-mounting",
      },
      {
        label: "Error-handling",
        topic: "Creating Error-Boundary",
      },
    ],
  },
  {
    title: "React Hooks",
    topics: [
      {
        label: "USEEFFECT, USESTATE AND OTHER HOOKS",
        topic:
          "What are hooks, why do we use them and various React hooks out there",
      },
    ],
  },
  {
    title: "Firebase 12",
    topics: [
      {
        label: "Introduction to Firebase",
        topic: "Understanding what is firebase and how it actually works",
      },
      {
        label: "Firebase Setup",
        topic: "Setting up firebase and adding it to the project",
      },
      {
        label: "CRUD with Firebase",
        topic:
          "Learning how to create, read, update and delete data from firebase",
      },
      {
        label: "Querying Data",
        topic: "Querying data from firebase",
      },
    ],
  },
  {
    title: "React Router v7",
    topics: [
      {
        label: "Routing",
        topic:
          "Building navigation and showing different pages for different routes",
      },
    ],
  },
  {
    title: "Context API",
    topics: [
      {
        label: "Context API",
        topic:
          "Passing Arguments to the component tree without passing props at every level",
      },
    ],
  },
  {
    title: "Redux in React",
    topics: [
      {
        label: "What is Redux?",
        topic: "Why Redux is used? What is the Data Flow?",
      },
      {
        label: "Store, Action, Reducers",
        topic: "Fundamental Principles of Redux, applying them practically",
      },
      {
        label: "Thunk Middleware",
        topic:
          "Allows you to write action creators that return a function instead of an action",
      },
    ],
  },
  {
    title: "Redux Toolkit",
    topics: [
      {
        label: "Redux Toolkit",
        topic: "Set of tools that helps simplify Redux development",
      },
    ],
  },
];

const ReactCurriculum = ({ setIsRepoShow }) => {
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
            {section.title}{" "}
            {openIndex === index ? (
              <FaChevronUp style={{ marginLeft: "10px" }} />
            ) : (
              <FaChevronDown style={{ marginLeft: "10px" }} />
            )}
          </button>
          {openIndex === index && (
            <ul className="curriculum-content">
              {section.topics.map((topic, idx) => (
                <li key={idx}>
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
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="center">
        <button className="home-cta" onClick={() => setIsRepoShow(false)}>
          Go to Downloader
        </button>
      </div>
    </div>
  );
};

export default ReactCurriculum;
