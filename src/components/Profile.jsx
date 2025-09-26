import {auth} from "../firebase.js";
import {updateProfile} from "firebase/auth";
import {useState} from "react";
const styles = {
    imageClass : "h-full w-full flex flex-col  items-center",
    imageDiv : "flex  justify-center items-center h-max w-max ",
    container : "flex  justify-center items-center flex-col p-6 bg-green-600 rounded-lg",
    name : "text-white font-bold text-lg",
    options: "h-full w-full flex justify-center items-center flex-col",
    optionsButton : " m-4 bg-gray-200 text-black hover:bg-green-900 transition hover:shadow-2xl active:bg-green-800  hover:text-white font-bold py-2 px-4 rounded cursor-pointer",
    forms: "h-max bg-white w-max rounded-lg  p-4 shadow-2xl flex flex-col",
    inputField: "w-full text-l p-3 border-1 border-gray-400 bg-white rounded my-4 text-black outline-none ",
    submitButton:"bg-green-900 w-full text-white px-10 py-4 rounded-md justify-center flex items-center hover:shadow-xl cursor-pointer"
}
function Profile(){
    const [profileOptions,setprofileOptions] = useState(null);
    const [newName, setNewName] = useState("");
    const [visibility, setVisibility] = useState("block");
    function handleClick(){setprofileOptions(true);setVisibility("hidden");}

    const handleSubmit = async (event) => {
        event.preventDefault();
        if( newName ===""){ alert("Both name  field cannot be empty!");setprofileOptions(false);setprofileOptions(true); return;}
        {
            await updateProfile(auth.currentUser, {displayName: newName});
            await auth.currentUser.reload();
        }
        setprofileOptions(false);
        setVisibility("block")

    }
    return(
    <div className= {styles["imageClass"]}>
        <div className= {styles["container"]}>
      <div className= {styles["imageDiv"]}>
          <img src = {auth.currentUser.photoURL} alt="Your image" className="rounded-full"/>
      </div>
       <div>
           <p className={styles.name}>Name : {auth.currentUser.displayName}</p>
           <p className={styles.name}>Email : {auth.currentUser.email}</p>
           {auth.currentUser.phoneNumber&& <p>Phone Number : {auth.currentUser.phoneNumber}</p>}
       </div>
        </div>
            <button onClick={handleClick} className={`${styles.optionsButton} ${visibility}`}>Profile Options</button>
        {profileOptions && <div className={styles.options} >
            <form className={styles.forms} onSubmit={(event)=>handleSubmit(event)}>
                <label>Add new name</label>
                <input className={styles.inputField} type="text" placeholder="Enter new Name" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                <button className={styles.submitButton} type="submit">Submit</button>
            </form>

        </div>}
    </div>

)
        }
export default Profile;