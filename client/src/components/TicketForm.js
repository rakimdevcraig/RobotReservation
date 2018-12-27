import React from 'react'




class TicketForm extends React.Component {

    state = {
        issue: ''
    }


    handleChange = (event) => {
        this.setState({ issue: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // if(!databody){
        //     alert('please enter a problem')
        // }

        let databody = {
            "issue": this.state.issue
        };
        console.log(databody)
        fetch('http://localhost:4000/api/issues', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('Error:', error));

        this.setState({ issue: "" });

    };

    onEnterPress = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            this.handleSubmit(event);
        }

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea type="text" placeholder="Describe your problem" onChange={this.handleChange} onKeyDown={this.onEnterPress} value={this.state.issue} />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        )
    }
};
export default TicketForm