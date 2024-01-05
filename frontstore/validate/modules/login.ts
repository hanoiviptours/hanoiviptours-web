import * as yup from 'yup';

const validateLoginSchema = yup.object().shape({
  userName: yup.string().required('Số điện thoại không hợp lệ'),
  password: yup.string().required('Sai password'),
});

export default validateLoginSchema;
