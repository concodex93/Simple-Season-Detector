import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { latitude: null, errorMessage: '' };
  
  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // render method required
  render() {
    console.log('Render method was called!');
    // Conditioinal rendering
    // No latitude and error message
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: {this.state.errorMessage}</div>;
      // Latitude returned and no error message
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>;
    } else {
      return <div>Loading ....</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
