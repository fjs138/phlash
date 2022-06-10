import FlashcardCard from "./FlashcardCard";

export default function FlashcardTable({ flashcardsArray }) {
  return (
    <div className="flashcardTable">
      FlashcardTable
      {flashcardsArray.map((flashcardCard) => {
        return (
          <FlashcardCard flashcardCard={flashcardCard} key={flashcardCard.id} />
        );
      })}
    </div>
  );
}
