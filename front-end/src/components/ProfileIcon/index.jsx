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
        const response = await fetch(`https://lap4-backend.onrender.com/dialogues/${props.dialogue_id}`)
        const data = await response.json()
        const messageResponse = await fetch(`https://lap4-backend.onrender.com/messages/${dialogue}`)
        const messageData = await messageResponse.json()
        props.setMessages(messageData.messages)
        console.log('DIALOGUE MESSAGES');
        console.log(messageData.messages);
        console.log(props.messages);
    }
    
  return (
    <div className='user-container' onClick={handleClick}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/017/592/small/ui-profile-icon-vector.jpg" alt="" />
        <div>
            {props.receiver}
        </div>
    </div>
  )
}

export default ProfileIcon