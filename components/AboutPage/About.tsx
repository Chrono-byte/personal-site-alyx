import DiscordLink from "../../islands/DiscordLink.tsx";

export default function About() {
  return (
    <div className="flex flex-col gap-1 md:gap-3 shrink text-base max-w-4xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      <div className="text-white background-card">
        <p>
          &emsp;Hi I'm Michael. I am a student at Indiana University
          Indianapolis.
        </p>
        <br />
        <p>
          &emsp;I'm a self-taught software developer and have worked on a
          variety of different projects that interested me. I have used
          Linux-based computers for {new Date().getFullYear() - 2019}{" "}
          years. I have been doing computer programming for{" "}
          {new Date().getFullYear() - 2016} years and have experience with{" "}
          <span className="text-blue-400">TypeScript</span>,{" "}
          <span className="text-blue-300">C++</span>. I've worked on a few websites
          and Discord chat bots as well as a chat app named boiler.
        </p>
        <br />
        <p>
          &emsp;During my time in high school, I competed in the VEX Robotics
          Competition as a programmer and designer for my team. We worked hard
          in the incredibly difficult Indiana region and managed to qualify for
          the State Championship in 2023.
        </p>
      </div>
      <div className="text-white background-card">
        <ul>
          <li>
            📚 I don't learn.
          </li>
          <li>
            💬 Yap yap yap
          </li>
          <li>
            📫 If you want to reach me, you can{" "}
            <a
              className="email text-blue-400"
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
