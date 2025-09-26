import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase.js";
function Message({message})
{
    const div = "relative w-max flex items-center shadow-xl m-4 py-2 px-4  rounded-tl-full rounded-tr-full my-6 ";
    const para = "absolute mt-[-4rem] text-gray-600 text-xs whitespace-nowrap flex";
    const sent_message="text-white text-end bg-green-500 flex-row-reverse float-right rounded-bl-full ";
    const received_message="text-black text-end bg-gray-100  float-left rounded-br-full ";
    const messageClass = message.uid === auth.currentUser.uid ? `${sent_message}` : `${received_message}`
    return (

        <div>
            <div className={`${div}${messageClass}`}>
                <p className={para}><img className="rounded h-4 w-4" src={message.photoURL} alt="No Profile"/>{message.name}</p>
                <p >{message.text}</p>
            </div>
        </div>
    )
}
export default Message;