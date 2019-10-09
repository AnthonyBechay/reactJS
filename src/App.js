import React, { Component } from 'react';
import './App.css';
import Contacts from './cards';


class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://accounts.spotify.com/authorize?client_id=928172297b4247e49cd958cf8552b6e8&response_type=code&redirect_uri=https://www.littlebangkoklb.com')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

  state = {
    contacts: []
  }
}
export default App;
