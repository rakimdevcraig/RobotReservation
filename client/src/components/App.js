import React from 'react';
import RobotPicker from './robotPicker';
import RobotInfo from './RobotInfo'



class App extends React.Component {
    /*
    make database query
    get results array of rows
    for each row
        create robotinfo component with name, resin, status from the result row
        let components ="";
        for (let i = 0; i < results.length; i++) {
            components += '<RobotInfo name="{result[i].name}" >';
        }
    */
    render(){
        return(
            <div>
                {/* <RobotPicker /> */}
                <RobotPicker />
                <RobotInfo name="Ava" resin="129" status="" />
                <RobotInfo name="Chuck" resin="128" />
            </div>
        )
    }
}

export default App