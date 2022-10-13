import { BehCard } from '@behaivoural-cards/api-interfaces';
import { BehaivouralCard } from 'thin-backend';

interface CardItemProps {
  card: BehaivouralCard;
  onClick: (card: BehaivouralCard) => void;
}
export default function CardItem({ card, onClick }: CardItemProps): JSX.Element {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(card);
  };

  return <div onClick={handleOnClick}>{card.title}</div>;
}
