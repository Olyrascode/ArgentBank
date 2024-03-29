// Importation des hooks nécessaires de React et Redux
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Importation des composants nécessaires
import UpdateUsername from "../Components/UpdateUsernameForm";
import Account from "../Components/Account";
import { Navigate } from "react-router-dom";

function UserProfilePage() {
  // Récupération de la fonction dispatch de Redux, du token d'authentification et des informations de l'utilisateur
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user.user);
  
  // Initialisation des variables d'état locales
  const [data, setData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  // Mise à jour de l'état local lorsque le nom d'utilisateur dans le state Redux change
  useEffect(() => {
    setData(user);
  }, [user]);

  // Envoi d'une requête POST à l'API pour récupérer le profil de l'utilisateur lors du chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }''

      const data = await response.json();
      // Mise à jour du state Redux avec les informations de l'utilisateur
      dispatch({ type: "USER_PROFILE_LOADED", payload: data.body });
      setData(data.body);
    };

    fetchData();
  }, [token, dispatch]);
  
  if (!token) {
    return <Navigate to="/sign-in" />; // Redirige vers la page de connexion si le token n'est pas présent
  }
  // Rendu du composant : affichage des informations de l'utilisateur et des comptes et un formulaire pour mettre à jour le nom d'utilisateur
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {data ? `${data.firstName} ${data.lastName}` : ""} !
          </h1>
        </div>
        {isEditing && <UpdateUsername setIsEditing={setIsEditing} firstname={data.firstName} lastname={data.lastName} />}
          <button
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Name"}
          </button>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
}

// Exportation du composant UserProfilePage pour être utilisé ailleurs dans l'application
export default UserProfilePage;