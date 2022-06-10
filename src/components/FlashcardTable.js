import FlashcardCard from "./FlashcardCard";

export default function FlashcardTable({ flashcardsArray }) {
  return (
    <div className="flashcardTable">
      {flashcardsArray.map((flashcardCard) => {
        return (
          <FlashcardCard flashcardCard={flashcardCard} key={flashcardCard.id} />
        );
      })}
    </div>
  );
}
