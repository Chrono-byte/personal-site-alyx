import Breadcrumb from "./Breadcrumb.tsx";

export default function Header(
  { subdirectory, fileID }: { subdirectory?: string; fileID?: string },
) {
  const menus = [
    {
      title: "blog",
      href: "/blog/",
    },
    {
      title: "current & past projects",
      href: "/projects/",
    },
    {
      title: "political notes",
      href: "/positions/",
    }
  ];

  return (
    <header className="pb-3 w-full">
      <Breadcrumb subdirectory={subdirectory} fileID={fileID} />

      <div className="header">
        <p>
          {menus.map((item, index) => (
            <span key={index}>
              {index !== 0 && index !== 3 && " / "}
              <a href={item.href} class="text-gray-700 hover:text-violet-400">{item.title}</a>
              {/* if more than 3 entires, inject linebreak */}
              { (index + 1) % 3 == 0 && <br /> }
            </span>
          ))}
        </p>
      </div>
    </header>
  );
}
