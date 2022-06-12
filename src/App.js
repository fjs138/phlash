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
    front: "What is the event loop responsible for?",
    back: "executing code, collecting and processing events, and executing queued sub-tasks",
  },
  {
    id: 4,
    front: "Elaborate on 'this' in regards to arrow functions",
    back: "Arrow functions do not have their own this.",
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
  { id: 7, front: "console.log(Array.from('foo'))", back: '["f", "o", "o"]' },
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
        <h1>PHLash</h1>
        <p>Flashcards for all...</p>
      </header>

      <p>Go Birds | Sixers | Phils | Flyers</p>

      <FlashcardTable flashcardsArray={flashcardsArray} />
    </div>
  );
}
