
import { Link } from 'react-router-dom'; // Add missing import statement for Link
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function SingIn() {
    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
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
            <Footer />
        </div>
    )
}

export default SingIn