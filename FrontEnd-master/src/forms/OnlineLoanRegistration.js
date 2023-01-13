import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { addOnlineLoanCustomer } from '../api/OnlineLoanApplication';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function OnlineLoanCustomerReg() {
  const OnlineLoancustomerRegSchema = Yup.object().shape({
    // application_id: Yup.string().required(),
    branch_code: Yup.string().required(),
    customer_id: Yup.date().required(),
    amount: Yup.number().required(),
    period_in_months: Yup.string().required(),
    fd_id: Yup.string().required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const OnlineLoancustomer = {
      // application_id: values.application_id,
      branch_code:values.branch_code,
      customer_id: values.customer_id,
      amount: values.amount,
      period_in_months: values.period,
      fd_id: values.fd_no,
    };
    addOnlineLoanCustomer({ OnlineLoancustomer }).then(() => setSubmitting(false));
  };
  return (
    <div>
      <Formik
        initialValues={{
          branch_code:'',
          customer_id: '',
          amount: '',
          period_in_months: '',
          fd_id: '',
        }}
        validationSchema={OnlineLoancustomerRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='OnlineLoancustomer--reg--form'>
              <h1>Online Loan Registration</h1>
              <span>
                <Field type='text' name='branch_code' placeholder='Branch Code' />
              </span>
              <span>
                <Field type='text' name='customer_id' placeholder='Customer ID' />
              </span>
              <span>
                <Field type='number' name='amount' placeholder='Amount' />
              </span>
              <span>
                <Field type='number' name='period_in_months' placeholder='Period' />
              </span>
              <span>
                <Field type='text' name='fd_id' placeholder='FD_ID' />
              </span>

              <Button
                className='OnlineLoancustomer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='OnlineLoancustomer--reg--form--errors'>
                    {/* <ErrorMessage name='application_no' component='div' /> */}
                    <ErrorMessage name='branch_code' component='div' />
                    <ErrorMessage name='customer_id' component='div' />
                    <ErrorMessage name='amount' component='div' />
                    <ErrorMessage name='period_in_months' component='div' />
                    <ErrorMessage name='fd_id' component='div' />
                  </div>
                )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}