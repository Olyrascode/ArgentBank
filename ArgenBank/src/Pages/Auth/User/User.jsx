
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { UserService } from './User.service.js'
// function User() {

//   const navigate = useNavigate();

//   useEffect(() => {
//     if(UserService.isLogged()){
      
//       // setinformation()
//     }  else {
//       navigate("/home");
//     }
//   })


//     return (
//         <div>

//           <main className="main bg-dark">
//       <div className="user">
//         <h1>Welcome back<br />Tony Jarvis!</h1>
//         <button className="edit-button">Edit Name</button>
//       </div>
//       <h2 className="sr-only">Accounts</h2>
//       <section className="account">
//         <div className="account-content-wrapper">
//           <h3 className="account-title">Argent Bank Checking (x8349)</h3>
//           <p className="account-amount">$2,082.79</p>
//           <p className="account-amount-description">Available Balance</p>
//         </div>
//         <div className="account-content-wrapper cta">
//           <button className="transaction-button">View transactions</button>
//         </div>
//       </section>
//       <section className="account">
//         <div className="account-content-wrapper">
//           <h3 className="account-title">Argent Bank Savings (x6712)</h3>
//           <p className="account-amount">$10,928.42</p>
//           <p className="account-amount-description">Available Balance</p>
//         </div>
//         <div className="account-content-wrapper cta">
//           <button className="transaction-button">View transactions</button>
//         </div>
//       </section>
//       <section className="account">
//         <div className="account-content-wrapper">
//           <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
//           <p className="account-amount">$184.30</p>
//           <p className="account-amount-description">Current Balance</p>
//         </div>
//         <div className="account-content-wrapper cta">
//           <button className="transaction-button">View transactions</button>
//         </div>
//       </section>
//     </main>

//         </div>
//     )
// }
// export default User

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { userService } from './User.service.jsx'
import { accountService } from "../../../_Services/User.service";
function User() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if(accountService.isLogged()){
      const userInformation = accountService.getUserInformation();
      setUserInfo(userInformation);
    } else {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      <main className="main bg-dark">
        <div className="user">
          {/* Afficher le nom de l'utilisateur s'il existe */}
          {userInfo && (
            <h1>Welcome back<br />{userInfo.name}!</h1>
          )}
          {/* Bouton pour éditer le nom */}
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default User
