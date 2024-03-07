
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Add missing import statement for Link


// utilisé formik pour créer le formulaire 

function SingIn() {

        const [message, setmessage] = useState("");

    const onSubmit = async (data) => {
        try{
            userService.loginuser(data)
                .then(response =>{
                    
                    //dispatch( stoker le token dans le store)
                    //redirect page user
                })
        } catch (error){
            if(error.response){
                setmessage(error.response.data)
            }
        }
    }

    return (
        <div>

            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {/* <formik onSubmit={onsubmit}>
                    // tous les inputs
                    <formik/> */}
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label>
                        </div>
               
                        <Link to="/User" className={`sign-in-button ${location.pathname === '/User' ? 'active' : ''}`}>Sign In </Link>
                    </form>
                </section>
            </main>

        </div>
    )
}

export default SingIn