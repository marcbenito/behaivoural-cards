import * as yup from 'yup';
const validationSchema = yup.object({
  title: yup.string().required('Required'),
  situation: yup.string().required('Required'),
  task: yup.string().required('Required'),
  action: yup.string().required('Required'),
  result: yup.string().required('Required'),
  imgUrl: yup.string().required('Required'),
});
export default validationSchema;
