import React from 'react';
import TicketForm from './TicketForm'

class RobotInfo extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {available: "Available" }
      }
    

    reserve = event => {
        this.setState({
            available: "Reserved"
            
        })
        if(this.state.available === "Reserved"){
            alert('Sorry Already Taken')
        }
    }
    
    release = event => {
        this.setState({
            available: "Available"
        })
        if(this.state.available === "Available"){
            alert('Sorry Already Free')
        }
    }
    
    
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.resin}</h2>
                <h3>{this.state.available}</h3>
                <button onClick={this.reserve}>Reserve</button>
                <button onClick={this.release}>Release</button>
                <TicketForm />
            </div>
        )
    }
}

export default RobotInfo;