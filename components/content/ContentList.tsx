import type { FunctionalComponent } from "preact";
import TitledCard from "./TitledCard.tsx";
import type { ContentItemPreview } from "../routes/lib/content.ts";

type ContentListProps = {
  title: string;
  description: string;
  items: ContentItemPreview[];
  itemComponent: FunctionalComponent<
    ContentItemPreview & Record<string, unknown>
  >;
  emptyMessage?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  itemProps?: Record<string, unknown>;
};

const ContentList: FunctionalComponent<ContentListProps> = ({
  title,
  description,
  items,
  itemComponent: ItemComponent,
  emptyMessage = "No content yet.",
  headingLevel = 1,
  itemProps = {},
}) => {
  const renderItems = () =>
    items.length > 0
      ? (
        items.map((item) => (
          <ItemComponent key={item.slug} {...item} {...itemProps} />
        ))
      )
      : <p className="text-gray-500">{emptyMessage}</p>;

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto py-6 space-y-4">
        <header>
          <TitledCard
            title={title}
            titleColor="text-white"
            headingLevel={headingLevel}
          >
            <p className="text-gray-400">{description}</p>
          </TitledCard>
        </header>

        <section className="flex flex-col divide-y divide-gray-500">
          {renderItems()}
        </section>
      </div>
    </div>
  );
};

export default ContentList;
