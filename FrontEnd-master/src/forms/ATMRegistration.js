import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addATM } from '../api/ATMs';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function ATMReg() {
  const atmRegSchema = Yup.object().shape({
    town: Yup.string().required(),
    branchCode: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const atm = {
      town: values.town,
      branchCode: values.branchCode,
    };
    addATM({ atm }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          town: '',
          branchCode: '',
        }}
        validationSchema={atmRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='atm--reg--form'>
              <h1>ATM Registration</h1>
              <span>
                <Field type='text' name='town' placeholder='Town' />
              </span>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>

              <Button
                className='atm--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='atm--reg--form--errors'>
                    <ErrorMessage name='town' component='div' />
                    <ErrorMessage name='branch_code' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}