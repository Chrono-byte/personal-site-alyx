import { Component } from "preact";

export default class BackgroundCard extends Component {
  render() {
    return (
      <div
        className={`background-card text-white text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)`}
      >
        {this.props.children}
      </div>
    );
  }
}
