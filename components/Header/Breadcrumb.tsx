export default function Breadcrumb(
  { subdirectory, fileID }: { subdirectory?: string[]; fileID?: string },
) {
  return (
    <nav aria-label="Breadcrumb navigation">
      <h2
        style={{
          // paddingLeft: "25px",
          // paddingRight: "25px",
        }}
      >
        <style jsx>
          {`
              .bread {
                  color: #000;
                  margin: 0 0 1.5rem 0;
                  line-height: 1.5;
                  border-bottom: 3px solid #000;
                  padding-bottom: 0.1rem;
              }
              `}
        </style>

        <div className="bread">
          <span className="text-black fw-">/ home /</span>{" "}
          <a
            href="/"
            className="text-black hover:text-blue-600 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            chrono
          </a>
          {" /"}
          {subdirectory?.map((directory, index) => (
            <span key={index}>
              <a
                className="text-black hover:text-blue-600 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                href={`/${subdirectory.slice(0, index + 1).join("/")}/`}
              >
                {" " + directory}
              </a>
              {" / "}
            </span>
          ))} {fileID && <span>{fileID}</span>}
        </div>
      </h2>
    </nav>
  );
}
