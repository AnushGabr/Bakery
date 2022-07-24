import { useState, useMemo } from "react";
import {Link,useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Register from "../../pages/register/Register";
import './login.css';

const Login = () => {

    const [isLoginShow, setLoginShow] = useState(false);

    const handleLoginShow = () => {
        setLoginShow(!isLoginShow);
    }


    const navigate = useNavigate();
    const [user, setUser] = useState({  
        email: '',
        password: ''
    });
     
    const users = useMemo(() => 'http://localhost:3000/users', []);
    const [email, setEmail] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        const usersEmail = users.map((user) => user.email)
        
        if (usersEmail.includes(email)) {
            console.log("This email already exist");
      
            return;
          }
      
          console.log("success");
    }


    const onInputChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
        setEmail(e.target.value);
    }

  

    return (
        <>
            <i className="fas fa-user" onClick={handleLoginShow}></i>
            {isLoginShow && 
                <div className="loginForm">
                    <div className="form-heading">
                        <h3 className="form-title">Sign in</h3>
                        <a href="#" className="close-form" onClick={handleLoginShow}>close <span>&times;</span></a>
                    </div>
                    <span className="line"></span>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <p className="form-username">
                            <label for="username">Username or email&nbsp;
                                <span className="required">*</span>
                            </label>
                            <input type="text" className="username-input" 
                                  value={user.email}
                                  onChange={(e) =>onInputChange(e)} 
                                  name='email'
                            />
                        </p>
                        <p className="form-password">
                            <label for="password">Password &nbsp;
                                <span className="required">*</span>
                            </label>
                            <input type="password" className="password-input" 
                                  value={user.password}
                                  onChange={(e)=>onInputChange(e)}
                                  name='password'
                             />
                        </p>
                        <div class="log-in">
                            <button type="submit" className="btn" >LOG IN</button>
                        </div>

                        <div className="login-form-footer">
                            <label for="">
                                <input type="checkbox" className="input-checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="lost-password">Lost your password?</a>
                        </div>
                        <span className="social-login-title"><span className="login-line"></span>Or login with<span className="login-line"></span></span>
                        <div className="social-login">
                            <a href="https://marush.am/en/my-account-2/?social auth=facebook" className="btn login-fb-link">
                                <i className="fa-brands fa-facebook-square"></i>
                                FACEBOOK</a>
                        </div>
                    </form>

                    <div className="create-account-question">
                        <i className="fa-regular fa-user"></i>
                        <span className="create-account-text">No account yet?</span>
                        <a href="http://localhost:3002/register" className="create-btn" >Create an Account <span className="line"></span></a>
                    </div>
                </div>
            }
        </>
            
    )
}

export default Login;