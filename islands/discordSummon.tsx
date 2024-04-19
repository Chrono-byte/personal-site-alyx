import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function DiscordLink() {
  useEffect(() => {
    const handleClick = () => {
      alert("DM me on Discord! @chrono__");
    };

    const discordLink = document.getElementById("discord-link");
    if (discordLink) {
      discordLink.addEventListener("click", handleClick);

      return () => {
        discordLink.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <a
      id="discord-link"
      className="text-violet-300"
      href=""
      title="click this button for my Discord handle!"
    >
      Discord
    </a>
  );
}
