import React from 'react';
import TicketForm from './TicketForm'

class RobotInfo extends React.Component {

    

    


    render() {
        return (
            <div>
                <h3>{this.props.Name}</h3>
                <h3>{this.props.Resin}</h3>
                <h3>{this.props.Status}</h3>
                <button onClick={() => this.props.reserve(this.props.Name)}>Reserve</button>
                <button onClick={() => this.props.release(this.props.Name)}>Release</button>
                <TicketForm />
            </div>
        )
    }
}

export default RobotInfo;