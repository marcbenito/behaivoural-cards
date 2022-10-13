import { useContext } from 'react';
import { useParams } from 'react-router';
import { BehaivouralCard } from 'thin-backend';
import { CardsContext } from '../cards/context/cards.context';
import CardForm, { cardFormValues } from './card-form/card-form';
import star_method from './star_method.png';

export default function CardUpdate(): JSX.Element {
  const { cardId } = useParams();
  const { cards, loaded, getCards, updateCard } = useContext(CardsContext);

  const card = cards?.find((card) => card.id === cardId);

  const handleSubmitted = async (values: cardFormValues) => {
    const vals = { ...values, id: cardId };
    updateCard?.(vals as BehaivouralCard);
  };

  if (loaded === false) {
    getCards && getCards();
    return <div>Loading...</div>;
  } else if (!card) {
    return <div>Card not found</div>;
  } else {
    return (
      <div className="layout-wrapper">
        <img src={star_method} alt="" />
        <CardForm onSubmitted={handleSubmitted} initialValues={card as cardFormValues} />
      </div>
    );
  }
}
