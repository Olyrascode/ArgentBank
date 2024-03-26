import { useState } from "react";
import { useDispatch } from "react-redux";

// () update le nom d'utilisateur en envoyant une requête PUT à l'API
async function updateUserProfile(username, dispatch) {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: username }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la mise à jour du nom d'utilisateur");
    }

    const data = await response.json();

    // Mise à jour du state Redux
    dispatch({ type: "UPDATE_USERNAME", payload: data.body.userName });
      } catch (error) {
    console.error("Erreur update username", error);
  }
}

function UpdateUsernameForm({ setIsEditing }) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();



  const handleSubmit = (event) => {
    event.preventDefault();
    // Appel API pour mettre à jour le nom d'utilisateur
    updateUserProfile(username, dispatch);
    setIsEditing(false);
  };
  // formulaire update username
  return (
    <form onSubmit={handleSubmit}>
      <label className="formTitle">
        New user name :
        <input
          id="username"
          type="text"
          value={username}
          className="inputForm"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit" className="submitForm">
        Submit
      </button>
    </form>
  );
}

export default UpdateUsernameForm;