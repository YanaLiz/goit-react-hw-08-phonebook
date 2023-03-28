import { Helmet } from 'react-helmet';
import  RegisterForm  from '../components/RegisterForm/RegisterForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const RegisterPage=() =>{
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SectionTitle title="Sing Up">
        <RegisterForm />
      </SectionTitle>
    </div>
  );
}
export default RegisterPage;