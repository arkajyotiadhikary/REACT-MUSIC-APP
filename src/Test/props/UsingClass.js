import React from 'react';

class Welcome extends React.Component
{
    render()
    {
        return(<div>
            <h2>
                Hello {this.props.name}, I know how to use Class now! 
            </h2>
        </div>)
    }
}

export default Welcome;