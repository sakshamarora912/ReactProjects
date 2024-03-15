import { useState } from "react";
import "./index.css";

const content = [
  ["React is extremely popular","It makes building complex, interactive UIs a breeze", "It's powerful & flexible","It has a very active and versatile ecosystem"],
  ["Components, JSX & Props", "State","Hooks (e.g., useEffect())","Dynamic rendering"],
  ["Official web page (react.dev)","Next.js (Fullstack framework)","React Native (build native mobile apps with React)"],
  ["Vanilla JavaScript requires imperative programming","Imperative Programming: You define all the steps needed to achieve a result","React on the other hand embraces declarative programming","With React, you define the goal and React figures out how to get there"],
  ["Vanilla JavaScript requires imperative programming","Imperative Programming: You define all the steps needed to achieve a result","React on the other hand embraces declarative programming","With React, you define the goal and React figures out how to get there"]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <div id="tabs">
        <menu>
          <button className={activeContentIndex === 0 ? "active" : ""} onClick={() => setActiveContentIndex(0)}>Why React?</button>
          <button className={activeContentIndex === 1 ? "active" : ""} onClick={() => setActiveContentIndex(1)}>Core Features</button>
          <button className={activeContentIndex === 2 ? "active" : ""} onClick={() => setActiveContentIndex(2)}> Resources</button>
          <button className={activeContentIndex === 3 ? "active" : ""} onClick={() => setActiveContentIndex(3)}>React vs JS</button>
          <button className={activeContentIndex === 4 ? "active" : ""} onClick={() => setActiveContentIndex(4)}>anything</button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li >{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
