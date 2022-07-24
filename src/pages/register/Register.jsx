import { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Login from "../../components/login/Login";
import './register.css'
const Register = () => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)
    let values;
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
      const validate = (values) => {
        const errors = {}
        if (!values.username) {
          errors.email = 'Email is required'
          console.log(errors.email)
        }
        if (!values.lastName) {
          errors.password = 'Password is required'
        }
        return errors
      }
    const validateAccount = async (user) => {
      const fetchAccountEmail = await axios.get('http://localhost:3000/users?email=${user.email}');
      return !!fetchAccountEmail.data.length;
    }
    const onSubmit = async (e) => {
        setServerError('');
        e.preventDefault();
        setFormErrors(validate(user))
        setIsSubmit(true)
        const isEmailExist = await validateAccount(user);
        if (isEmailExist) {
          setServerError('Account already exist');
          return;
        }
       values = Object.values(user)
       if (values.every((item) => item != '')) {
          await axios.post('http://localhost:3000/users', user)
          navigate('/')
        }
    }
    const onInputChange = (e) => {
       setUser({...user, [e.target.name]: e.target.value})
    }
  return (
    <div className="Register">
         <section className="account">
         <img src="images/aboutusback.jpg"/>
        <div className="content">
            <p>Home <span>/</span> My Account</p>
      </div>
         </section>
         <section className="register">
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="input">
                    <h3>REGISTER</h3>
                    <p>Email adress <span>*</span></p>
                    <input type="email"
                            value={user.email}
                            onChange={(e) =>onInputChange(e)}
                            name='email'
                     />
                    {
                      formErrors.email && (
                        <p style={{color:'red'}}>{formErrors.email}</p>
                      )
                    }
                    <p>Password <span>*</span></p>
                    <input type="password"
                        value={user.password}
                        onChange={(e)=>onInputChange(e)}
                        name='password'
                    />
                    {
                      formErrors.password && (
                        <p style={{color:'red'}}>{formErrors.password}</p>
                      )
                    }
                </div>
                <div className="container2">
                    <p>Your personal data will be used to support your experience throughout this website, to manage access
                    to your account, and for other purposes described in our <a href="http://localhost:3002/returnPolicy">privacy policy.</a>
                    </p>
                    <button type="submit" class="btn">REGISTER</button>
             </div>
            </form>
           {
             serverError && (
               <div>
                 <p style={{color:'red'}}>{serverError}</p>
               </div>
             )
           }
            <div className="login">
                    <h3>REGISTER</h3>
                <p>Registering for this site allows you to access your order status and history.
                    Just fill in the fields below, and we'll get a new account set up for you in no time.
                    We will only ask you for information necessary to make the purchase process faster and easier.
                </p>
                <button className="login">Login</button>
            </div>
         </section>
    </div>
  )
}
export default Register