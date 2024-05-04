import { Component, ErrorInfo } from "preact";
import type { ComponentProps } from "preact/compat";

export default class BackgroundCard extends Component {
  constructor() {
    super();
    this.state = { errored: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { errored: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render(props: ComponentProps<"div">, state: { errored: boolean }) {
    if (state.errored) {
      return (
        <div
          className={`background-card text-white text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)`}
        >
          Something went catastrophically wrong.
        </div>
      );
    }

    return (
      <div
        className={`background-card text-white text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)`}
      >
        {props.children}
      </div>
    );
  }
}
