// import React from 'react';
// import './Login.css';
// import { FaLock } from 'react-icons/fa';
// import { HiMail } from 'react-icons/hi';
// const Login = () => {
    
//     const handleLog = (e) => {

//         e.preventDefault();
  
//         window.alert('Tank you for loggin in to Rolex');
  
//       };
//   return(
//     <>
//       <section className='section'>
//             <div class="login-box">
//                 <form onSubmit={handleLog} >
//                     <h2>Login</h2>
//                     <div class="input-box">
//                         <span class="icon">
//                             <HiMail /> 
//                         </span>
//                         <input type="email" required />
//                         <label>Email</label>
//                     </div>
//                     <div class="input-box">
//                         <span class="icon">
//                         <FaLock /> 
//                         </span>
//                         <input type="password" required />
//                         <label>Password</label>
//                     </div>
//                     <div class="remember-forgot">
//                         <label><input type="checkbox" /> Remember me </label>
//                         <a href="/">Forgot Password?</a>
//                     </div>
//                     <button type="submit">Login</button>
//                     <div class="register-link">
//                         <p>Don't have an account? <a href="/">Register</a></p>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     </>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import { FaLock } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


function Login() {


  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');





  const handleLogin = () => {

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

  };


  return (
        <section className='section'>
            <div class="login-box">
                <form>
                    <h2>Login</h2>
                    <div class="input-box" onChange={(e) => setEmail(e.target.value)} >
                        <span class="icon">
                            <HiMail /> 
                        </span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div class="input-box" onChange={(e) => setPassword(e.target.value)} >
                        <span class="icon">
                        <FaLock /> 
                        </span>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" /> Remember me </label>
                        <a href="/">Forgot Password?</a>
                    </div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                    <div class="register-link">
                        <p>Don't have an account? <a href="/">Register</a></p>
                    </div>
                </form>
            </div>
        </section>
        

  );

}




export default Login;