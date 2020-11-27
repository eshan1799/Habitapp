import React from 'react'
import "../styles/toggleButton.css";

class ToggleButton extends React.Component {

    state = {
        checked: false
    }

    handleCheckBox = (e) => {
        this.setState(prevState => ({ checked: !prevState.checked }))
        const d = new Date()
        const day = d.getDate()
        const month = d.getMonth()+1
        const year = d.getFullYear()
        const dateNow = `${year}/${month}/${day}`
        if (this.state.checked === false) {
            console.log(this.state.checked)
            this.props.submitEvent(this.props.habit, dateNow)
        } else {
            console.log(this.state.checked)
            this.props.removeEvent(this.props.habit, dateNow)
        }

    }

    render() {
        return (
            <div id="toggleButtonLabel">
                <label id={this.props.idx} htmlFor={this.props.idx}>Habit done for today: </label>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckBox} id={this.props.idx} name={this.props.idx} value={this.props.idx} />
            </div>
        )
    }
}

export default ToggleButton
