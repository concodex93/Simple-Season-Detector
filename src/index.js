import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  renderContent = () => {
    // Conditioinal rendering
    // No latitude and error message
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: {this.state.errorMessage}</div>;
      // Latitude returned and no error message
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  };

  // Render method required
  // Best not to have conditionally logic inside render method
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
