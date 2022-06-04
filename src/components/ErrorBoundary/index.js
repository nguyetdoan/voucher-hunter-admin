import "@dotlottie/player-component";
import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: "",
  };
  componentDidCatch(error) {
    this.setState({ ...this.state, error: error.message });
  }

  render() {
    if (this.state.error === "Network Error") {
      return (
        <>
          <dotlottie-player
            src="images/network-error.lottie"
            autoplay
            loop
            style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
          />
          <button className="back-to-home-btn">
            <a href="/">Back to home</a>
          </button>
        </>
      );
    } else if (this.state.error) {
      return (
        <>
          <dotlottie-player
            src="images/server-error.lottie"
            autoplay
            loop
            style={{ width: "90%", maxWidth: "500px", margin: "0 auto" }}
          />
          <button className="back-to-home-btn">
            <a href="/">Back to home</a>
          </button>
        </>
      );
    }

    return this.props.children;
  }
}
