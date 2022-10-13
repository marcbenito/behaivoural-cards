import { TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import styles from './card-form.module.scss';
import CardImageSelector from '../card-image-selector';
import validationSchema from './card-form.validations';

export interface cardFormValues {
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  imgUrl: string;
}

export interface CardCreationFormProps {
  initialValues: cardFormValues;
  // eslint-disable-next-line no-unused-vars
  onSubmitted(values: cardFormValues): any;
}

export default function CardForm(props: CardCreationFormProps): JSX.Element {
  const { initialValues, onSubmitted } = props;

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log('onSub');
      onSubmitted(values);
    }
  });

  const handleOnSelected = (src: any) => {
    console.log('Image Selected..', src);

    formik.setFieldValue('imgUrl', src);
  };

  const imgSelector = useMemo(() => {
    return (
      <CardImageSelector onSelected={handleOnSelected} initialImageUrl={formik.values.imgUrl} />
    );
  }, [formik.values.imgUrl]);

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <h2> Select a title for this Story</h2>
        <TextField
          className={styles.title}
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <div className={styles.textareaInput}>
          {formik.touched.imgUrl && Boolean(formik.errors.imgUrl) && <div> ERRROR NO IMAGE</div>}
          <TextField
            sx={{ display: 'none' }}
            value={formik.values.imgUrl}
            name="imgUrl"
            onChange={formik.handleChange}
          />
          {imgSelector}
        </div>
        <h5>Situation</h5>
        <TextField
          className="textarea-input"
          multiline
          name="situation"
          rows={2}
          label="Situation"
          value={formik.values.situation}
          onChange={formik.handleChange}
          error={formik.touched.situation && Boolean(formik.errors.situation)}
          helperText={formik.touched.situation && formik.errors.situation}
        />
        <h5>Task</h5>
        <TextField
          className="textarea-input"
          name="task"
          multiline
          rows={2}
          label="task"
          value={formik.values.task}
          onChange={formik.handleChange}
          error={formik.touched.task && Boolean(formik.errors.task)}
          helperText={formik.touched.task && formik.errors.situation}
        />
        <h5>Action</h5>
        <TextField
          className="textarea-input"
          name="action"
          multiline
          rows={2}
          label="action"
          value={formik.values.action}
          onChange={formik.handleChange}
          error={formik.touched.action && Boolean(formik.errors.action)}
          helperText={formik.touched.task && formik.errors.situation}
        />
        <h5>Result</h5>
        <TextField
          className="textarea-input"
          name="result"
          multiline
          rows={2}
          label="result"
          value={formik.values.result}
          onChange={formik.handleChange}
          error={formik.touched.result && Boolean(formik.errors.result)}
          helperText={formik.touched.task && formik.errors.situation}
        />

        <button>Create</button>
      </form>
    </Container>
  );
}
