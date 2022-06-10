import "./App.css";
import FlashcardTable from "./components/FlashcardTable";
import { useState } from "react";

const flashcardArray = [
  { id: 1, front: "front wgregrewgrwesample", back: "backgwrgrwewgre sample" },
  { id: 2, front: "front fewfegrsample", back: "back gwergerwgrewample" },
  { id: 3, front: "front samplegregrwegw", back: "bacgrewgrgrwk sample" },
];
function App() {
  const [flashcardsArray, setFlashcardsArray] = useState(flashcardArray);

  return (
    <div className="App">
      <header className="App-header">
        <p>App-header</p>
        <p>Header stuff...</p>
      </header>

      <p>App</p>

      <FlashcardTable flashcardsArray={flashcardsArray} />
    </div>
  );
}

export default App;
