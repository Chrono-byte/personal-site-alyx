// file: src/components/TitledCard.tsx
import type { ComponentChildren } from "preact";
import Card from "./ui/Card.tsx";

type TitledCardProps = {
  title?: string;
  titleColor?: string;
  className?: string;
  children: ComponentChildren;
};

export default function TitledCard(
  { title, children, className, titleColor = "" }: TitledCardProps,
) {
  return (
    <Card title={title} className={className} titleColor={titleColor}>
      {children}
    </Card>
  );
}
