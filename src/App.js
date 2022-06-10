import "./App.css";
import FlashcardTable from "./components/FlashcardTable";
import { useEffect, useState } from "react";

const flashcardArray = [
  {
    id: 1,
    front: "What does setState do?",
    back: "schedules an update to a component’s state object. When state changes, the component responds by re-rendering.",
  },
  {
    id: 2,
    front: "What is the difference between state and props?",
    back: "props get passed to the component whereas state is managed within the component (similar to variables declared within a function)",
  },
  {
    id: 3,
    front: "What is the event loop?",
    back: "responsible for executing the code, collecting and processing events, and executing queued sub-tasks",
  },
  {
    id: 4,
    front: "What are some defining characteristics of arrow functions?",
    back: "Arrow functions do not have their own this. They are not well suited for defining object methods.",
  },
  {
    id: 5,
    front: "ES6 allows function parameters to have default values.",
    back: "function myFunction(x, y = 10){}",
  },
  {
    id: 6,
    front: "Function Rest Parameter",
    back: "The rest parameter (...) allows a function to treat an indefinite number of arguments as an array. function sum(...args){}",
  },
  { id: 7, front: "Array.from()", back: "// Returns [A,B,C,D,E,F,G]" },
  {
    id: 8,
    front: "New ES6 Math Methods",
    back:
      "Math.trunc()\n" +
      "Math.sign()\n" +
      "Math.cbrt()\n" +
      "Math.log2()\n" +
      "Math.log10()",
  },
];

export default function App() {
  const [flashcardsArray, setFlashcardsArray] = useState(flashcardArray);

  return (
    <div className="App">
      <header className="App-header">
        <p>PHLash</p>
        <p>Flashcards for all...</p>
      </header>

      <p>Go Birds, Sixers, Phils</p>

      <FlashcardTable flashcardsArray={flashcardsArray} />
    </div>
  );
}
