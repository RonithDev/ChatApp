import {useState, useEffect, useRef} from "react";
import {db} from "../firebase.js";
import {query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message.jsx";
import SendMessage from "./SendMessage.jsx";
function Chat(){
    const [message, setMessage] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"),orderBy("timestamp"));
        const unSubscribe = onSnapshot(q,(querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(),id : doc.id});
            })
            setMessage(messages);
        });
        return () => { unSubscribe(); };
    },[]);

    return(
        <>
            <main className="flex flex-col p-[10px] h-[65vh]  overflow-y-auto">
                {message && message.map((message) => (
                    <Message key = {message.id} message={message} />
                    ))}

            </main>
            < SendMessage scroll={scroll} />
            <span ref={scroll}></span>
       </>
    );
}
export default Chat;