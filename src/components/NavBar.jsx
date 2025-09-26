import {auth,provider} from "../firebase.js";
import {signInWithPopup,signOut} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import {useState} from "react";


const styles = {
    signOutButton: "bg-gray-200 text-black hover:bg-green-900 transition hover:shadow-2xl active:bg-green-800  hover:text-white font-bold py-2 px-4 rounded cursor-pointer",
    profileButton: `bg-gray-200 text-black hover:bg-green-900 transition hover:shadow-2xl active:bg-green-800  hover:text-white font-bold py-2 px-4 rounded cursor-pointer`
}
const googleSignIn = async () =>{
  try {
      await signInWithPopup(auth, provider);
  }
  catch(err){console.log(err)}

}
const googleSignOut = async () =>{
    try {
    await signOut(auth);
}
catch(err){console.log(err)}
}
function NavBar(props) {
    const [user] = useAuthState(auth);
   const [buttonText, setButtonText] = useState("Profile");
    const handleClick = ()=>{ props.onShowProfile();;buttonText==="Profile"?setButtonText("Back"):setButtonText("Profile") }




    return (

        <div className="w-full h-16 my-4 bg-green-800 flex justify-between items-center m-0" >
            <h1 className="text-white text-3xl font-mono font-bold mx-2">PRYVASY Chat</h1>
           <div className=" mx-2 h-full flex items-center">
               {user?
                   <div><button className={`${styles.profileButton} `} onClick={handleClick}>{buttonText}</button> <button className={styles.signOutButton} onClick={googleSignOut}>Sign Out</button>
                   </div>:<GoogleButton onClick = {googleSignIn}/>}
           </div>
        </div>
    )
}
export  default NavBar;