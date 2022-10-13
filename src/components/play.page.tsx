import { useState } from 'react';
import { BehaivouralCard, query, Question } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import CardItem from './card-item';

export default function PlayManager() {
  const cards = useQuery(query('behaivoural_cards'));
  const questions = useQuery(query('questions'));

  console.log(cards, questions);
  const [selectedQuestion, setSelectedQuestions] = useState<Question[]>([]);
  const [idxQuestion, setIdxQuestion] = useState(0);
  const [deck, setDeck] = useState<BehaivouralCard[]>();

  //Inicializaciones...
  if (cards && !deck) {
    setDeck(cards);
  }

  if (questions && !selectedQuestion.length) {
    setSelectedQuestions([questions[0], questions[1], questions[2], questions[3], questions[4]]);
  }

  let activeQuestion;
  if (selectedQuestion.length && idxQuestion < selectedQuestion.length) {
    activeQuestion = <h1>{selectedQuestion[idxQuestion].description}</h1>;
  }

  //Handlers..
  const handleOnCardSelected = (card: BehaivouralCard) => {
    //Eliminar la card del listado ...
    //setDeck(deck => deck?.filter((c) => c.id !== card.id));

    //Pasar a la siguiente pregunta..
    setIdxQuestion(idxQuestion + 1);
  };

  return (
    <>
      {idxQuestion < selectedQuestion.length && activeQuestion}
      {idxQuestion >= selectedQuestion.length && <h1 className="">Juego Acabado!!</h1>}
      <div>
        {deck?.map((card) => (
          <CardItem card={card} onClick={handleOnCardSelected} />
        ))}
      </div>
    </>
  );
}
