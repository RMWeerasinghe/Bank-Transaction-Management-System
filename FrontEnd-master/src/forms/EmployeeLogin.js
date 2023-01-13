import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';

//import the function from '../api/Authentication';
// import { addATM } from '../api/ATMs';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function EmployeeLoginReg() {
  const EmployeeLoginRegSchema = Yup.object().shape({
    employee_id: Yup.string().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const employee_login = {
      employee_id: values.customer_id,
      password: values.password,
    };
    // need to add the function 
    addATM({ employee_login }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          employee_id: '',
          password: '',
        }}
        validationSchema={EmployeeLoginRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='atm--reg--form'>
              <h1>Employee Login</h1>
              <span>
                <Field type='text' name='employee_id' placeholder='Employee ID' />
              </span>
              <span>
                <Field type='text' name='password' placeholder='Password' />
              </span>

              <Button
                className='employee--login--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='employee--login--form--errors'>
                    <ErrorMessage name='employee_id' component='div' />
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