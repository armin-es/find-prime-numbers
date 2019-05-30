import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Primes extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.fetchPrimes = this.fetchPrimes.bind(this);
    this.state = { primes: '' };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.fetchPrimes(e.target.elements.number.value);
  }

  fetchPrimes(number) {
    axios.get(`http://localhost:4000/${number}`).then((res) => {
      this.setState({ primes: JSON.stringify(res.data) });
    });
  }

  render() {
    const { primes } = this.state;
    return (
      <div className="App">
        <p>Find prime numbers smaller than</p>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="standard-bare"
            defaultValue=""
            margin="normal"
            name="number"
          />
          <Button variant="contained" type="submit">Calculate</Button>
        </form>
        <p>{primes}</p>
      </div>
    );
  }
}

export default Primes;
