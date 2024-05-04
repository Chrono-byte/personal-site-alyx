import { Component, JSX } from "preact";

type BackgroundCardProps = {
  className?: string;
};

class BackgroundCard extends Component<BackgroundCardProps> {
  constructor(props: BackgroundCardProps) {
    super(props);
  }

  render() {
    const { children, className } = this.props;
    return (
      <div
        className={`background-card text-white text-shadow:_1px_1px_0_rgb(0_0_0_/_100%) ${className}`}
      >
        {children}
      </div>
    );
  }
}

export default BackgroundCard;
