
// import { useState } from 'react';
// import { Link } from 'react-router-dom'; // Add missing import statement for Link


// // utilisé formik pour créer le formulaire 

// function SingIn() {

//         const [message, setmessage] = useState("");

//     const onSubmit = async (data) => {
//         try{
//             userService.loginuser(data)
//                 .then(response =>{
                    
//                     //dispatch( stoker le token dans le store)
//                     //redirect page user
//                 })
//         } catch (error){
//             if(error.response){
//                 setmessage(error.response.data)
//             }
//         }
//     }

//     return (
//         <div>

//             <main className="main bg-dark">
//                 <section className="sign-in-content">
//                     <i className="fa fa-user-circle sign-in-icon"></i>
//                     <h1>Sign In</h1>
//                     {/* <formik onSubmit={onsubmit}>
//                     // tous les inputs
//                     <formik/> */}
//                     <form>
//                         <div className="input-wrapper">
//                             <label htmlFor="username">Username</label>
//                             <input type="text" id="username" />
//                         </div>
//                         <div className="input-wrapper">
//                             <label htmlFor="password">Password</label>
//                             <input type="password" id="password" />
//                         </div>
//                         <div className="input-remember">
//                             <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
//                             >Remember me</label>
//                         </div>
               
//                         <Link to="/User" className={`sign-in-button ${location.pathname === '/User' ? 'active' : ''}`}>Sign In </Link>
//                     </form>
//                 </section>
//             </main>

//         </div>
//     )
// }

// export default SingIn


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux'; // Importer useDispatch pour Redux

import { accountService } from '../../../_Services/User.service';

function SingIn() {
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch(); // Initialiser le dispatch

    const onSubmit = async (values) => {
        setIsSubmitting(true);
        try {
            accountService.loginuser(values)
                .then(response => {
                    const token = response.data.token;
                    dispatch(setToken(token)); // Dispatch de l'action setToken avec le token
                })
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data);
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Formik
                        initialValues={{ username: '', password: '', rememberMe: false }}
                        onSubmit={onSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="input-wrapper">
                                    <label htmlFor="username">Username</label>
                                    <Field type="text" name="username" id="username" />
                                    <ErrorMessage name="username" component="div" className="error" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" id="password" />
                                    <ErrorMessage name="password" component="div" className="error" />
                                </div>
                                <div className="input-remember">
                                    <Field type="checkbox" name="rememberMe" id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                                <button type="submit" className={`sign-in-button ${isSubmitting ? 'disabled' : ''}`} disabled={isSubmitting}>Sign In</button>
                            </Form>
                        )}
                    </Formik>
                    {/* Ce lien est-il nécessaire ? */}
                    <Link to="/User" className={`sign-in-button ${location.pathname === '/User' ? 'active' : ''}`}>Sign In</Link>
                </section>
            </main>
        </div>
    )
}

export default SingIn;
