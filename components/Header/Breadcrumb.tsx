export default function Breadcrumb(
  { subdirectory, fileID }: { subdirectory?: string; fileID?: string },
) {

  return (
    <h2>
      <a>/ home / </a><a href="/">chrono /</a>
      <a>
        {subdirectory && (
          <a href={`/${subdirectory}/`}>{" " + subdirectory} /</a>
        )}
        {fileID}
      </a>
    </h2>
  );
}
