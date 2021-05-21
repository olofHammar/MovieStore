import React from 'react';
import styles from '../styles/login.css';
import image from '../img/m_logo.png';

function Login ({ email, setEmail, password, setPassword, handleLogin, handleSignup, 
    hasAccount, setHasAccount, emailError, passwordError}) {
 
 return(

 <div className="bodyContainer">
     <div className="leftContainer">
        <img src={ image } alt="image" className="logoImage" />
     </div>
    
    <div className="rightContainer">
        <div className="inputContainer">
            <h3 className="userName">Username</h3>
            <input className="unserNameInput"
                type="text" 
                autoFocus 
                required value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Password</h3>
            <input 
                type="password" 
                required value={password} 
                onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="bottomContainer">
        {hasAccount ? (
        <>
            <button className="btnLogin" onClick={handleLogin}>Sign in</button>
            <p className="loginP" >Do not have a account ? <span className="loginSpan" onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
        </>
        ) : (
        <>
        <button className="btnLogin" onClick={handleSignup}>Sign up</button>
        <p className="loginP">Have an account ? <span className="loginSpan" onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
        </> 
        )}
 
        <div className="errorMsgContainer">
            <p className="errorMsg">{passwordError}</p>
            <p className="errorMsg">{emailError}</p>
        </div>
        </div> 
    </div>
    
</div> 
) 
};
 
export default Login;
