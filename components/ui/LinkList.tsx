export default function LinkList({ links }: { links: Record<string, string> }) {
  return (
    <div className="mt-3">
      <label className="font-bold mr-2">
        Link{Object.entries(links).length > 1 ? "s" : ""}:
      </label>
      <div className="inline-flex gap-3 flex-wrap">
        {Object.entries(links).map(([name, link]) => (
          <a
            key={name}
            className="text-blue-300 hover:text-blue-400 underline-offset-2 hover:underline"
            href={link}
            rel="noopener noreferrer"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
