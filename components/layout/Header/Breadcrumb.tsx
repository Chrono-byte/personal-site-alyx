interface BreadcrumbProps {
  subdirectory?: string[];
  fileID?: string;
}

export default function Breadcrumb({ subdirectory, fileID }: BreadcrumbProps) {
  const renderSubdirectories = () => {
    if (!subdirectory) return null;

    return subdirectory.map((directory, index) => {
      const href = `/${subdirectory.slice(0, index + 1).join("/")}/`;

      return (
        <span key={index}>
          <a
            className="text-black hover:text-blue-600 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            href={href}
          >
            {directory}
          </a>
          {" / "}
        </span>
      );
    });
  };

  return (
    <nav aria-label="Breadcrumb navigation">
      <h2>
        <div className="text-black mb-6 leading-normal border-b-4 border-black pb-1">
          <span className="text-black">/ home /</span>{" "}
          <a
            href="/"
            className="text-black hover:text-blue-600 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            chrono
          </a>
          {" / "}
          {renderSubdirectories()}
          {fileID && <span>{fileID}</span>}
        </div>
      </h2>
    </nav>
  );
}
