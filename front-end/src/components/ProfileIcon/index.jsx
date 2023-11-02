import React, {useContext, useState} from 'react'
import { UserContext } from '../../App'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const ProfileIcon = (props) => {
    const currentUser = useContext(UserContext)
    const [ clicked, setClicked ] = useState(false)
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
        setClicked(true)
    }
    
  return (
    <div id='user-container' onClick={handleClick} className={clicked ? 'clicked' : ''}>
        <AccountCircleOutlinedIcon style={{color:'#1c1c1c'}}/>
        <div id='props-receiver'>
            {props.receiver}
            🇮🇹
        </div>
    </div>
  )
}

export default ProfileIcon
