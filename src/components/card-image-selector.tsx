import { TextField } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import styles from './card-image-selector.module.scss';

interface CardImageSelectorProps {
  initialImageUrl?: string;
  onSelected: (img: string) => void;
}
export default function CardImageSelector({
  initialImageUrl,
  onSelected
}: CardImageSelectorProps): JSX.Element {
  console.log('Image Selector..');
  const [img, setImg] = useState<string[]>([]);
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);

  const addImages = (event?: any) => {
    console.log('addImages called..');
    if (loading) {
      console.log('Loading with loading a true');
      return;
    }
    setLoading(true);
    event?.preventDefault?.();
    let proms = [
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        }),
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        }),
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        }),
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        }),
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        }),
      fetch('https://api.scryfall.com/cards/random')
        .then((resp) => resp.json())
        .then((res) => {
          setImg((prev) => [...prev, res.image_uris?.art_crop]);
        })
    ];

    Promise.allSettled(proms).then(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    if (!initialImageUrl) {
      addImages();
    } else {
      setSelected(initialImageUrl);
    }
    return () => {
      console.log('Unmounting..');
    };
  }, []);

  const handleOnSelected = (event: any) => {
    setSelected(event.target.src);
    onSelected(event.target.src);
  };
  return (
    <>
      {initialImageUrl && (
        <img
          src={initialImageUrl}
          alt="card"
          className={
            styles.artSelection +
            (selected && selected === initialImageUrl ? ' ' + styles['active'] : '')
          }
          onClick={handleOnSelected}
        />
      )}
      <div className={styles.imageContainer}>
        {img.map((img, index) => {
          return (
            <img
              onClick={handleOnSelected}
              className={
                styles.artSelection + (selected && selected === img ? ' ' + styles['active'] : '')
              }
              key={index}
              src={img}
              alt=""
            />
          );
        })}
      </div>
      <Button sx={{ marginTop: '30px' }} variant="contained" onClick={addImages}>
        Get More Image
      </Button>
    </>
  );
}
