import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // State object
    // Only time we do direct assignment to state object
    this.state = {
      latitude: null,
      errorMessage: ""
    };

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
    console.log("render method was called!");
    // Conditioinal rendering
    // No latitude and error message
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> Error: {this.state.errorMessage}</div>;
      // Latitude returned and no error message
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude:{this.state.latitude}</div>;
    } else {
      return <div>Loading ....</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
