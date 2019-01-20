import React, { Component } from 'react';
import RobotPicker from './robotPicker';
import RobotInfo from './RobotInfo'



class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            robots: []

        }
    }

     //when I update the db I should refresh the data
    //so when a robot is released or reserved the db is in sync with the user side
    //only allow the person that reserved the robot to release
    //if you didn't reserve the robot you shouldn't be able to release
    //when a robot is reserved all users are notified
    componentDidMount() {
        fetch('http://localhost:4000/api/robots', {
            method: 'Get',
        })
            .then(res => res.json())
            .then(robots => {
                this.setState({
                    robots: robots
                });
                console.log(robots)
            })
            .catch(error => console.log('Error:', error));
    }

    reserve = Name => {
        console.log('reserve called by', Name)

        const robots = this.state.robots
        for (let i = 0; i < robots.length; i++) {
            if (Name === robots[i].Name) {
                if (robots[i].Status === "Reserved") {
                    alert('Sorry Already Taken')
                } else {
                    robots[i].Status = "Reserved"
                    //only update the robot if it hasn't been taken
                    fetch('http://localhost:4000/api/robots', {
                        method: 'POST',
                        body: JSON.stringify(robots[i]),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                        .catch(error => console.log('Error:', error));
                };
            }
        }

        this.setState({
            robots: robots

        })
    }

    release = Name => {
        console.log('release called by', Name)
        const robots = this.state.robots
        for (let i = 0; i < robots.length; i++) {
            if (Name === robots[i].Name) {
                if (robots[i].Status === "Available") {
                    alert('Sorry Already Free')
                } else {
                    robots[i].Status = "Available"
                    fetch('http://localhost:4000/api/robots', {
                        method: 'POST',
                        body: JSON.stringify(robots[i]),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                        .catch(error => console.log('Error:', error));
                }
            }
        }
        this.setState({
            robots: robots
        })
    }

    render() {
        return (
            <div>
                {/* <RobotPicker /> */}
                <RobotPicker />
                {this.state.robots.map(robot => <RobotInfo Name={robot.Name} Resin={robot.Resin} Status={robot.Status} reserve={this.reserve} release={this.release} key={robot.Name} />)}


            </div>
        )
    }
}

export default App