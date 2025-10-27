import type { ComponentChildren } from "preact";
import Card from "../ui/Card.tsx";

type TitledCardProps = {
  title?: string;
  titleColor?: string;
  className?: string;
  children: ComponentChildren;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function TitledCard(
  { title, children, className, titleColor = "", headingLevel }:
    TitledCardProps,
) {
  return (
    <Card
      title={title}
      className={className}
      titleColor={titleColor}
      headingLevel={headingLevel}
    >
      {children}
    </Card>
  );
}
