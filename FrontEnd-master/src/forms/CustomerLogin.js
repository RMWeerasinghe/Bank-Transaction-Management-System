import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
//import the function from '../api/Authentication';
import { loginCustomer } from '../api/AuthCutomer';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function CustomerLoginReg() {
  const CustomerLoginRegSchema = Yup.object().shape({
    customer_id: Yup.string().required(),
    password: Yup.string().required(),
  });

  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const customer_login = {
      customer_id: values.customer_id,
      password: values.password,
    };
    // need to add the function 
    loginCustomer({ customer_login }).then(() => {
      setSubmitting(false)
      navigate('/customerPortal')
    }).catch(() => {
      setSubmitting(false)
      navigate('/customerPortal')
    }
    );
  };
  return (
    <div>
      <Formik
        initialValues={{
          customer_id: '',
          password: '',
        }}
        validationSchema={CustomerLoginRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='customer--login--form'>
              <h1>Customer Login</h1>
              <span>
                <Field type='text' name='customer_id' placeholder='Customer ID' />
              </span>
              <span>
                <Field type='text' name='password' placeholder='Password' />
              </span>

              <Button
                className='customer--login--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='customer--reg--form--errors'>
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='password' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}