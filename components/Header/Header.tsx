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

      <div
        className="header text-center"
        style={{
          margin: 0,
          lineHeight: 1.5,
          marginTop: 0,
        }}
      >
        <p>
          {menus.map((item, index) => (
            <span key={index}>
              {index !== 0 && (index % 3 != 0) && " / "}
              <a
                href={item.href}
                className="text-violet-400 hover:text-violet-700"
              >
                {item.title}
              </a>
              {/* if more than 3 entires, inject linebreak */}
              {(index + 1) % 3 == 0 && <br />}
            </span>
          ))}
        </p>
      </div>
    </header>
  );
}
