import { Component } from "preact";

const timeOptions = {
  timeZone: "America/Indiana/Indianapolis",
  hour12: false,
  timeStyle: "medium" as const,
};

export default class Clock extends Component {
  timer: number | undefined;
  state: { time: number } | { time: Date };
  constructor() {
    super();
    this.state = { time: Date.now() };
  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    const time = new Date(this.state.time);

    const currentLocalTime = time.toLocaleString("en-US", timeOptions);
    const currentLocalHours = parseInt(currentLocalTime.split(":")[0]);
    const deltaFromUTC = time.getUTCHours() - currentLocalHours;

    return (
      <li className="row-end-3">
        {currentLocalTime} ({"UTC-" + deltaFromUTC})
      </li>
    );
  }
}
