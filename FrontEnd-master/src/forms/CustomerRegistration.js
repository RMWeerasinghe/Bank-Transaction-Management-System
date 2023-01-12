import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addCustomer } from '../api/Customers';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function CustomerReg() {
  const customerRegSchema = Yup.object().shape({
    customerId: Yup.string().required(),
    addressNo: Yup.string().required(),
    street: Yup.string().required(),
    town: Yup.string().required(),
    phone: Yup.string()
      .matches(/(^[0-9]+$|^\+[0-9]+$)/, 'Invalid Phone Number')
      .min(10, 'Phone number must be at least 10 digits')
      .max(12, 'Phone number must be at most 12 digits')
      .required(),
    email: Yup.string().required,
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const customer = {
      customerId: values.customerId,
      addressNo: values.addressNo,
      street: values.street,
      town: values.town,
      phone: values.phone,
      email: values.email,
    };
    addCustomer({ customer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          customerId: '',
          addressNo: '',
          street: '',
          town: '',
          phone: '',
          email: '',
        }}
        validationSchema={customerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='customer--reg--form'>
              <span>
                <Field
                  type='text'
                  name='customerId'
                  placeholder='Customer ID'
                  style={
                    props.touched.name && props.errors.name
                      ? errorInputStyle
                      : null
                  }
                />
              </span>
              <span>
                <Field type='text' name='addressNo' placeholder='Address No' />
              </span>
              <span>
                <Field type='text' name='street' placeholder='Street' />
              </span>
              <span>
                <Field type='text' name='town' placeholder='Town' />
              </span>
              <span>
                <Field type='text' name='phone' placeholder='Phone' />
              </span>
              <span>
                <Field type='text' name='email' placeholder='Email' />
              </span>
              
              <Button
                className='customer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='customer--reg--form--errors'>
                    <ErrorMessage name='customerId' component='div' />
                    <ErrorMessage name='addressNo' component='div' />
                    <ErrorMessage name='street' component='div' />
                    <ErrorMessage name='town' component='div' />
                    <ErrorMessage name='phone' component='div' />
                    <ErrorMessage name='email' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}