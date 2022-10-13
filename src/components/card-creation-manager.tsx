import CardForm, { cardFormValues } from './card-form/card-form';
import React from 'react';
import { createRecord } from 'thin-backend';
import NavMenu from './nav-menu';

export default function CardCreationManager(): JSX.Element {
  const initialValues: cardFormValues = {
    title: '',
    situation: '',
    task: '',
    action: '',
    result: '',
    imgUrl: ''
  };

  const handleSubmitted = async (values: any) => {
    try {
      const insertedTodo = await createRecord('behaivoural_cards', values);
      console.log('--->', insertedTodo);
      alert('created');
    } catch (err) {
      console.log(err);
      alert('error');
    }
  };
  return (
    <div>
      <NavMenu />
      <CardForm onSubmitted={handleSubmitted} initialValues={initialValues} />
    </div>
  );
}
