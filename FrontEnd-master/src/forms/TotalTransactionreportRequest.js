import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function TotalTransactionReg() {
  const TotalTransactionRegSchema = Yup.object().shape({
    branch_code: Yup.string().required(),
  });

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    navigate('/branchManagerPortal/totaltransactionReport/' + values.branch_code);
  };
  return (
    <div>
      <Formik
        initialValues={{
          branch_code: '',
        }}
        validationSchema={TotalTransactionRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='lateLoanPayer--reg--form'>
              <h1>Late Loan Payers Request</h1>
              <span>
                <Field type='text' name='branch_code' placeholder='branch_code' />
              </span>
              <Button
                className='lateLoanPayer--reg--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='lateLoanPayer--reg--form--errors'>
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