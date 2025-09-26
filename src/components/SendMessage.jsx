import {useState} from 'react';
import {collection,addDoc,serverTimestamp} from 'firebase/firestore';
import {db,auth} from "../firebase.js";
export default function SendMessage({scroll})
{
    const [Input, setInput] = useState('');


    const sendToStore = async (e) => {
        e.preventDefault();
        if(Input === ""){alert("Please enter a valid message");return;}
         const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db,'messages'),{
            text:Input,
            name:displayName,
            photoURL: auth.currentUser.photoURL,
            uid,
            timestamp: serverTimestamp()
        })
        setInput("");
        scroll.current.scrollIntoView({behavior: "smooth"});
    }
    return(
<form onSubmit={sendToStore} className="h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 ">
    <input className="w-full text-xl p-3 bg-white text-gray-700 outline-none border-none"  type="text" placeholder="Enter Your Message" value={Input} onChange={(e)=>setInput(e.target.value)}></input>
    <button className="bg-green-900 w-[20%] text-white px-10 py-4 rounded-md flex items-center hover:shadow-xl cursor-pointer" type="submit">Send</button>
</form>
);
}