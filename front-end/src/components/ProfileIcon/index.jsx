import React from 'react'

const ProfileIcon = (props) => {
    let name = props.username 
    console.log(name)

    const getInitials = (name) => {
        console.log('GETTING INITIALS')
        let initials;
        const nameSplit = name.split(" ");
        const nameLength = nameSplit.length;
        if (nameLength > 1) {
            initials =
                nameSplit[0].substring(0, 1) +
                nameSplit[nameLength - 1].substring(0, 1);
        } else if (nameLength === 1) {
            initials = nameSplit[0].substring(0, 1);
        } else return;
    
        return initials.toUpperCase();
    }
    
    function createImageFromInitials(size, name, color) {
        console.log('CREATING IMAGE')
        if (name == null) return;
        name=getInitials(name)
    
        const canvas=document.createElement('canvas')
        const context=canvas.getContext('2d')
        canvas.width=canvas.height=size
    
        context.fillStyle="#ffffff"
        context.fillRect(0,0,size,size)
    
        context.fillStyle=`${color}50`
        context.fillRect(0,0,size,size)
    
        context.fillStyle=color;
        context.textBaseline='middle'
        context.textAlign='center'
        context.font =`${size/2}px Roboto`
        context.fillText(name,(size/2),(size/2))
    
        return canvas.toDataURL()
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log('GET RANDOM COLOR' + color)
        return color;
    }

    
  return (
    <div>
        <img 
        className='profile-icon' 
        src={ 
            createImageFromInitials(50, name, getRandomColor())
        }
        alt='profile-pic'
        />
    </div>
  )
}

export default ProfileIcon