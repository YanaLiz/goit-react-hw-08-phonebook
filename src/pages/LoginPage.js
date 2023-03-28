import { Helmet } from 'react-helmet';
import  LoginForm  from '../components/LoginForm/LoginForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';


const LoginPage=() =>{
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SectionTitle title="Log In">
        <LoginForm />
      </SectionTitle>
      
    </div>
  );
}
export default LoginPage;