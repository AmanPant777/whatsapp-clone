import React from 'react'
import './SideBarChat.css'
import Avatar from '@material-ui/core/Avatar';

const SideBarChat = () => {
    return (
        <div className='sidebarchats'>
            <Avatar />
            <div className="sidebarchats_info">
                <h2>Prashansa</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}
export default SideBarChat
