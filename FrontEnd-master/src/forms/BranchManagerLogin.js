import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

//import the function from '../api/Authentication';
import { loginBranchManager } from '../api/Authentication';
import * as Yup from 'yup';
// Use this instead https://github.com/jannikbuschke/formik-antd
export default function BranchManagerLoginReg() {
  const BranchManagerLoginRegSchema = Yup.object().shape({
    employee_id: Yup.string().required(),
    password: Yup.string().required(),
  });

  const navigate = useNavigate();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    const branchmanager_login = {
      employee_id: values.employee_id,
      password: values.password,
    };
    // need to add the function 
    loginBranchManager({ branchmanager_login }).then(() => {
      setSubmitting(false)
      navigate('/branchManagerPortal')
    }).catch(() => {
      setSubmitting(false)
      //navigate('/branchManagerPortal')
    }
    );
  };
  return (
    <div>
      <Formik
        initialValues={{
          employee_id: '',
          password: '',
        }}
        validationSchema={BranchManagerLoginRegSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          const errorInputStyle = {
            borderColor: 'red',
          };
          return (
            <Form className='branchmanager--login--form'>
              <h1>Branch Manager Login</h1>
              <span>
                <Field type='text' name='employee_id' placeholder='Employee ID' />
              </span>
              <span>
                <Field type='text' name='password' placeholder='Password' />
              </span>

              <Button
                className='branchmanager--login--form--submit'
                type='primary'
                onClick={props.handleSubmit}
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
              {Object.values(props.touched).includes(true) &&
                Object.values(props.errors).length !== 0 && (
                  <div className='branchmanager--reg--form--errors'>
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