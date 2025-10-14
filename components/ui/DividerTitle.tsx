export default function DividerTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center mb-3">
      <hr className="border-stone-400 border-b-2 flex-1" />
      <h2 className="mx-3 text-xs font-bold whitespace-nowrap">{title}</h2>
      <hr className="border-stone-400 border-b-2 flex-1" />
    </div>
  );
}
