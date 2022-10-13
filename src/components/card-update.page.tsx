import { useContext } from 'react';
import { useParams } from 'react-router';
import { query, updateRecord } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { CardsContext, useCardsContext } from '../cards/context/cards.context';
import CardForm, { cardFormValues } from './card-form/card-form';
import CardUpdate from './card-update';
import NavMenu from './nav-menu';
import star_method from './star_method.png';

export default function CardUpdateManager(): JSX.Element {
  const cardsValue = useCardsContext();

  return (
    <>
      <NavMenu />
      <CardsContext.Provider value={cardsValue}>
        <CardUpdate />
      </CardsContext.Provider>
    </>
  );
}
