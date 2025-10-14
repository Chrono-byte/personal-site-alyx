import Breadcrumb from "./Breadcrumb.tsx";

export default function Header(
  { subdirectory, fileID }: { subdirectory?: string[]; fileID?: string },
) {
  const menus = [
    {
      title: "blog",
      href: "/posts/",
    },
    {
      title: "current & past projects",
      href: "/projects/",
    },
    //  {
    //  title: "political notes",
    //  href: "/positions/",
    //  },
  ];

  return (
    <header className="mt-1 pb-8 mb-0 w-full font-black [text-shadow:_1px_1px_0_rgba(255_255_255_/_90%)]">
      <Breadcrumb subdirectory={subdirectory} fileID={fileID} />

      <nav aria-label="Main navigation" className="header text-center">
        <ul
          className="list-none inline"
          style={{
            margin: 0,
            lineHeight: 1.5,
            marginTop: 0,
          }}
        >
          {menus.map((item, index) => (
            <li key={index} className="inline">
              {index !== 0 && (index % 3 != 0) && " / "}
              <a
                href={item.href}
                className="text-blue-600 hover:text-blue-800 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.title}
              </a>
              {/* if more than 3 entires, inject linebreak */}
              {(index + 1) % 3 == 0 && <br />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
