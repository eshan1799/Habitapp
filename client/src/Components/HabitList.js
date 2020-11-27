import React from 'react';
import ToggleButton from "./ToggleButton";
import ReactModal from 'react-modal';
import HabitInfo from './HabitInfo';
import "../styles/habitList.css";
ReactModal.setAppElement("#root");


class HabitList extends React.Component {
    state = {
        isModalOpen: false,
        habit: ""
    }

    openModal = (e) => {
      console.log(e.target)
        this.setState({ isModalOpen: true })
        this.setState({ habit: this.props.habits[e.target.id].habit})

    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    handleCheckbox = (e) => {
        this.setState({ checked: e.target.checked })
    }

    submitEvent = (habit, eventDate) => {

      // const options1 = {
      //     method: 'GET',
      //     body: habit,
      //     headers: { 'Content-Type' : 'application/json' }
      // }
      // fetch(`http://localhost:5000/dashboard/events`, options1)
      //   .then(console.log)
      // .catch(console.warn)

        const newEvent = {
            id: this.props.habits[0].user_id,
            habit: habit,
            date: eventDate
        }
        // console.log(newEvent)
        const options = {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: { 'Content-Type' : 'application/json' }
        }
        fetch(`http://localhost:5000/dashboard/events`, options)
        .catch(console.warn)
    }

    removeEvent = (habit, eventDate) => {
        const deleteEvent = {
            id: this.props.habits[0].user_id,
            habit: habit,
            date: eventDate
        }
        console.log(deleteEvent)
        const options = {
            method: 'DELETE',
            body: JSON.stringify(deleteEvent),
            headers: { 'Content-Type' : 'application/json' }
        }
        fetch(`http://localhost:5000/dashboard/events`, options)
        .catch(console.warn)
    }

    render() {

        return (
            <>
                <div id="habitListContainer">
                    {/*{this.props.habits.length !== 0 ? <h1>HELLO {this.props.habits[0].user_name}!</h1> : <h1>Hello</h1> */}

                    {this.props.habits.map((item, idx) => {
                        return (
                          <div className="gridItem" key={idx}>
                            <div id={idx} onClick={e => this.openModal(e) }>
                            <h2 id={idx}>{item.habit}</h2>
                            <p id={idx}>{item.frequency} times per week </p>
                            </ div>
                            <div>
                            <ToggleButton removeEvent={this.removeEvent} submitEvent={this.submitEvent} removeEvent={this.removeEvent} idx={idx} habit={item.habit}/>
                            </ div>
                          </div>
                        )
                    })}

                    <div className="gridItem" onClick={ this.props.openAddHabitModal } >
                    <h2 id='addHabitText'>Add habit</h2>
                    <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
                    </div>

                    <ReactModal className="ReactModal__Overlay ReactModal__Overlay--after-open ReactModal__Overlay--before-close habbitListModal" isOpen= { this.state.isModalOpen }>
                        <HabitInfo isModalOpen={this.state.isModalOpen} habit={ this.state.habit } submitEvent={ this.submitEvent } removeEvent={ this.removeEvent } closeModal={ this.closeModal } />
                    </ReactModal>

                </div>
            </>
        )
    }
}

export default HabitList
