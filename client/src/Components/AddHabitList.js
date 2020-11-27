import React from 'react';

class AddHabitList extends React.Component {
    state = {
        habitInput: '',
        habitFrequency: '1'
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };

    addHabit = e => {
        e.preventDefault();
        console.log(this.state);

        fetch('localhost:5000/dashboard/habits')
        .then()
        .catch(console.warn())
    }

    render() {
        return (
            <>
            <button onClick={ this.props.closeModal }>Close Modal</button>

            <form onSubmit={ this.addHabit }>
                <label htmlFor="enterHabit">Enter your habit:</label>
                <input id='habitInput' name='habitInput' type='text' required onChange={ this.handleInput }></input>

                <label htmlFor="habitFrequency">How many times per week?</label>
                <select name="habitFrequency" id="habitFrequency" required onChange={ this.handleInput }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <input type='submit'></input>
            </form>
            </>
        )
    }
}

export default AddHabitList;