import React, {useContext} from 'react'
import { UserContext } from '../../App'

const ProfileIcon = (props) => {
    const currentUser = useContext(UserContext)
    let name = props.username 
    console.log(name)
    
    const handleClick = async (e) => {
        e.preventDefault()
        const dialogue = props.dialogue_id
        props.setCurrentDialogue(dialogue);
        console.log('CURRENT DIALOGUE IS');
        console.log(dialogue);
        const response = await fetch(`http://127.0.0.1:5000/dialogues/${props.dialogue_id}`)
        const data = await response.json()
        const messageResponse = await fetch(`http://127.0.0.1:5000/messages/${dialogue}`)
        const messageData = await messageResponse.json()
        props.setMessages(messageData.messages)
        console.log('DIALOGUE MESSAGES');
        console.log(messageData.messages);
        console.log(props.messages);
    }
    
  return (
    <div>
        <button onClick={handleClick}>
            {props.receiver}
        </button>
    </div>
  )
}

export default ProfileIcon