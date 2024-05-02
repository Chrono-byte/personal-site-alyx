export default function Breadcrumb(
  { subdirectory, fileID }: { subdirectory?: string[]; fileID?: string },
) {
  return (
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
                margin: 0 0 0.5rem 0;
                line-height: 1.5;
                border-bottom: 3px solid #000;
                padding-bottom: 0.1rem;
            }
            `}
      </style>

      <div class="bread">
        <span class="text-black fw-">/ home /</span>
        <a href="/" class="text-black hover:text-violet-400">
          {" "}chrono
        </a>
        {" /"}
        {subdirectory?.map((directory, index) => (
          <span>
            <a
              key={index}
              class="text-black hover:text-violet-400"
              href={`/${subdirectory.slice(0, index + 1).join("/")}/`}
            >
              {" " + directory}
            </a>
            {" / "}
          </span>
        ))} {fileID && <span>{fileID}</span>}
      </div>
    </h2>
  );
}
