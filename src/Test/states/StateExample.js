import React from 'react';

class Message extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            message: 'Welcome Guys'
        }
    }

    ChangeState()
    {
        var messages = ['Hobo de','ai bal','bal singa koti'];
        this.setState(
            {
                message: messages[Math.floor(Math.random() * (messages.length))]
            }
        )
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.ChangeState()}>subscribe</button>
            </div>
        )
    }
}

export default Message;