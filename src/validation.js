//@flow
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  message: Yup.string()
    .required('This field is required')
    .min(10, 'Type at least few words please'),
});

export {ContactSchema};
