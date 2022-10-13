import { createContext, useState } from 'react';
import { BehaivouralCard, query, updateRecord } from 'thin-backend';

export interface CardContextType {
  cards: BehaivouralCard[] | null;
  loaded: boolean;
  addCards: (card: BehaivouralCard) => void;
  getCards: () => void;
  updateCard: (card: BehaivouralCard) => void;
}

export const CardsContext = createContext<Partial<CardContextType>>({});

export const useCardsContext = (): CardContextType => {
  const [cards, setCards] = useState<BehaivouralCard[]>([]);
  const [loaded, setLoaded] = useState(false);

  return {
    cards,
    loaded,
    updateCard: (card: BehaivouralCard) => {
      updateRecord('behaivoural_cards', card.id, card).then(() => {
        console.log('SAVe');
        setCards((cards) => cards?.map((c) => (c.id === card.id ? card : c)));
      });
    },
    addCards: (card: BehaivouralCard) => {
      setCards((cards) => cards && [...cards, card]);
    },
    getCards: () => {
      query('behaivoural_cards')
        .fetch()
        .then((resp: any) => {
          setCards(resp);
          setLoaded(true);
        })
        .catch(() => {
          console.log('err');
        });
    }
  };
};
