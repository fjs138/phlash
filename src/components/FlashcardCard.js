import { useState } from "react";

export default function FlashcardCard({ flashcardCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className='card' onClick={() => setFlipped(!flipped)}>
      {flipped ? flashcardCard.back : flashcardCard.front}
    </div>
  );
}
