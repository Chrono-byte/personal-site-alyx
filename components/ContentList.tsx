import type { FunctionalComponent } from "preact";
import TitledCard from "./TitledCard.tsx";
import type { ContentItemPreview } from "../routes/lib/content.ts";

type ContentListProps = {
  title: string;
  description: string;
  items: ContentItemPreview[];
  renderItem: (item: ContentItemPreview) => preact.ComponentChild;
  emptyMessage?: string;
};

const ContentList: FunctionalComponent<ContentListProps> = ({
  title,
  description,
  items,
  renderItem,
  emptyMessage = "No content yet.",
}) => {
  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto py-6 space-y-4">
        <header>
          <TitledCard title={title} titleColor="text-white">
            <p className="text-gray-400">{description}</p>
          </TitledCard>
        </header>

        <section className="flex flex-col divide-y divide-gray-500">
          {items.length
            ? items.map(renderItem)
            : <p className="text-gray-500">{emptyMessage}</p>}
        </section>
      </div>
    </div>
  );
};

export default ContentList;
