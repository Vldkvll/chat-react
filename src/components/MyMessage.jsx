import React from 'react'

const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0){
        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className='message-image'
                style={{ float: 'right'}}
            />
        )
    }
    return (
        <div className='message' style={{ marginRight:'18px', color:'white', backgroundColor:'#2bcb6a'}} >
            { message.text}
        </div>
    )
}

export default MyMessage
