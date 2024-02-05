export default function Breadcrumb(
  { subdirectory, fileID }: { subdirectory?: string[]; fileID?: string },
) {
  return (
    <h2>
      <a>/ home /</a>
      <a href="/"> chrono /</a>
      {subdirectory?.map((directory, index) => (
        <a key={index} href={`/${subdirectory.slice(0, index + 1).join("/")}/`}>
          {" " + directory} /
        </a>
      ))}
      {fileID && <a>{fileID}</a>}
    </h2>
  );
}
