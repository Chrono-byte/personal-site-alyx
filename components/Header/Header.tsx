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
    //    {
    //      title: "political notes",
    //      href: "/positions/",
    //    },
  ];

  return (
    <header className="pb-3 w-full font-black">
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
                className="text-violet-700 hover:text-violet-400"
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
