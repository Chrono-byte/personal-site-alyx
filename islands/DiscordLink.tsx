export default function DiscordLink() {
  const handleClick = () => {
    alert("DM me on Discord! @chrono__");
  };

  return (
    <a
      id="discord-link"
      className="text-violet-300"
      onClick={handleClick}
      title="click this button for my Discord handle!"
    >
      Discord
    </a>
  );
}
