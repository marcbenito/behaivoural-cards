import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import CardList from './card-list';
import NavMenu from './nav-menu';

export default function CardListManager(): JSX.Element {
  const items = useQuery(query('behaivoural_cards').orderByDesc('createdAt'));

  return (
    <div>
      <NavMenu />
      <CardList cards={items} />
    </div>
  );
}
