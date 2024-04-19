import DiscordLink from "../../islands/discordSummon.tsx";

export default function About() {
  return (
    <div class="flex flex-col gap-1 md:gap-3 shrink text-base max-w-4xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      <div class="text-white background-card">
        <p>
          &emsp;Hi I'm Michael. I am a student at Indiana University
          Indianapolis.
        </p>
        <br />
        <p>
          &emsp;I'm a self-taught software developer and have worked on a
          variety of different projects since I was 12. I have used Linux-based
          computers for {new Date().getFullYear() - 2019}{" "}
          years. I have been doing computer programming for{" "}
          {new Date().getFullYear() - 2016} years and have experience with{" "}
          <span class="text-blue-400">TypeScript</span>,{" "}
          <span class="text-blue-300">C++</span>, and{"  "}
          <span class="text-blue-400 [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
            Lua
          </span>{" "}
          knowledge. I've worked on a few websites, a few Discord bots, and even
          a chat app.
        </p>
        <br />
        <p>
          &emsp;During my time in high school, I competed in the VEX Robotics
          Competition as a programmer and designer for my team. We worked hard
          in the incredibly difficult Indiana region and managed to qualify for
          the State Championship in 2023.
        </p>
      </div>
      <div class="text-white background-card">
        <ul>
          <li>
            📚 I'm currently pursuing my bachelors.
          </li>
          <li>
            💬 I'm cripplingly addicted to Overwatch 2 in a not-a-joke way.
          </li>
          <li>
            📫 If you want to reach me, you can{" "}
            <a
              class="email text-blue-400"
              title="click this to send me an email!"
              href={`mailto:${"me" + "@" + "michaelgummere.com"}`}
            >
              email
            </a>, or DM me on <DiscordLink />
          </li>
        </ul>
      </div>
    </div>
  );
}
