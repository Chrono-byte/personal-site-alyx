// file: src/components/TitledCard.tsx
import type { ComponentChildren } from "preact";
import StyledPanel from "./BackgroundCard.tsx";

type TitledCardProps = {
  title?: string;
  className?: string;
  children: ComponentChildren;
};

export default function TitledCard(
  { title, children, className = "" }: TitledCardProps,
) {
  return (
    <StyledPanel title={title} className={className}>
      {children}
    </StyledPanel>
  );
}
