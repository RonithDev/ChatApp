import NavBar   from "./components/NavBar.jsx";
import Chat    from "./components/Chat.jsx";
import ProfilePage from "./components/Profile.jsx";
import {auth} from "./firebase.js";
import {useState} from "react";
import Login from "./components/Login.jsx";
import {useAuthState} from "react-firebase-hooks/auth"; //This hook "useAuthState" was installed from react-firebase-hooks
function App(){
    const [user, setUser] = useAuthState(auth);
    const [currentView, setCurrentView] = useState("chat");

    const OnShowProfile = () => {currentView==="chat"?setCurrentView("profile"):setCurrentView("chat")}
    function mess(){ console.log("Profile");}
    return(
        <>
            <div className="max-w-[728px] mx-auto shadow-2xl text-center rounded ">
                <section className=" flex flex-col h-[90vh] bg-gray-200 mt-10 shadow-2xl rounded border-0 relative">
                    <NavBar onShowProfile={OnShowProfile}/>
                    {user ? currentView === "profile" ? <ProfilePage ShowProfile={OnShowProfile}/> : <Chat /> : <Login />}
                </section>
            </div>
        </>
        );
}
export default App
