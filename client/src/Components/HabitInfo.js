import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/HabitInfo.css";

class HabitInfo extends React.Component {
    state = {
        date: new Date(),
        isModalOpen: this.props.isModalOpen,
        habitDates: []
    }

    dateFree = null;

    fetchAllEvents = async () => {
          const res = await fetch("http://localhost:5000/dashboard/event", {
          method: "GET",
          headers: { token: localStorage.token }
      })
          let dateCheck = []
          dateCheck = await res.json()
          this.setState({ habitDates: dateCheck })
      }


  onChange = date => this.setState({ date })

  onClickDay = (value) => {

    this.fetchAllEvents();

    let d = value.getDate();
    let m = value.getMonth()+1;
    let y = value.getFullYear();
    if(d<10) {
        d='0'+d;
    }

    if(m<10) {
        m='0'+m;
    }
    let eventDate = (y + "-" + m + "-" + d)

    console.log(eventDate)
    console.log(this.state.habitDates)
    debugger;

    for (let i = 0; i < this.state.habitDates.length; i++) {
      console.log('check '+this.state.habitDates[i].habitdate.includes(eventDate))
      if (this.state.habitDates[i].habitdate.includes(eventDate)) {
        // this.setState({ dateFree: false })
        this.dateFree = false
        console.log('date already exists')
        return
      } else {
        // this.setState({ dateFree: true })
        this.dateFree = true
        console.log('date doesnt exist')

      }
    }
    console.log(this.dateFree)
    if(this.dateFree === true){
        this.props.submitEvent(this.props.habit, eventDate)
        this.fetchAllEvents();
    } else if (this.dateFree === false) {
        this.props.removeEvent(this.props.habit, eventDate)
        this.fetchAllEvents();
    }

  }

  render() {
    return (
      <div id="habitInfoContainer">
            <Calendar
            className='calendar'
            onChange={this.onChange}
            value={this.state.date}
            onClickDay = {this.onClickDay}
            />
            <i onClick={ this.props.closeModal } className="far fa-window-close fa-3x modalExit"></i>
      </div>
    );
  }
}

export default HabitInfo;
