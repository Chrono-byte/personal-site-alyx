export default function DiscordLink() {
  const handleClick = () => {
    alert("DM me on Discord! @chrono__");
  };

  return (
    <button
      id="discord-link"
      className="text-blue-400 hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent border-none p-0 font-inherit"
      onClick={handleClick}
      title="click this button for my Discord handle!"
      type="button"
    >
      Discord
    </button>
  );
}
