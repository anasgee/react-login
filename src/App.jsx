import React, { useState } from 'react';
import './index.css'
import useLocalStorage from 'use-local-storage';

const App = () => {

    const[enable, setEnable]=useState('Enable Dark Mode');
    const [theme,setTheme]=useLocalStorage("dark"? "light":"dark");
    const showTheme =()=>{
        let newTheme = theme === "light"? "dark":"light";
        setTheme(newTheme);
        if(theme=="dark"){
         setEnable("Enable Dark Mode");
         document.getElementById('toggle').className="fa fa-toggle-off";
        }
        else{
         setEnable("Enable Light Mode");
         document.getElementById('toggle').className="fa fa-toggle-on";

        };

        
    }

    return (
        <>

            <div className='app' data-theme={theme}>
                <div className='login'>
                    <h1>Login</h1>
                    <div className='container  '>
                        <div className='top'>
                            <i className='fa fa-google'></i>
                            <i className='fa fa-facebook-square'></i>
                            <i className='fa fa-linkedin'></i>
                            <i className='fa fa-twitter-square'></i>
                            <i className='fa fa-apple'></i>

                        </div>
                        <p className='divider'><span>Or</span></p>
                        <form>
                            <label>E-mail</label>
                            <input type='email' placeholder="Enter Email Here" />
                            <label>Password</label>
                            <input type='password' placeholder="Enter passwoed Here" />
                            <div className='remember'>
                                <input type='checkbox' style={{cursor:"pointer"}} />
                                <p>Remember Me</p>
                            </div>
                            <button>Login</button>

                        </form>
                        <div className='bottom'>
                            <p>Forget Password?</p>
                            <a target='_jump' href='https://www.youtube.com/razatechtube'>Reset Password</a>
                        </div>
                        <p className='create'> Create Account</p>
                    </div>
                    <div className='theme-toggle'>
                        <h2>{enable}</h2>
                        <i onClick={showTheme} id="toggle" class="fa fa-toggle-off"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;