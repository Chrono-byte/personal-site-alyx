export default function About() {
  return (
    <div class="flex flex-col gap-1 md:gap-3 shrink text-sm [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      <div class="text-white background-card">
        <p>
          Hi I'm Michael. I am a freshman engineering technology student at{" "}
          <span class="" style="color:#daaa00">
            Purdue University in Indianapolis
          </span>.
        </p>
        <br />
        <p>
          I'm a self-taught software developer and have worked on a variety of
          different projects since I was 12. I have been programming for{" "}
          {new Date().getFullYear() - 2016} years and have experience with{" "}
          <span class="text-blue-200">C++</span>,{"  "}
          <span class="text-blue-300">TypeScript</span>,{" "}
          <span class="text-yellow-400">JavaScript</span>, and some light{" "}
          <span class="text-yellow-200">Python</span>{" "}
          knowledge. I've worked on a few websites, a few Discord bots, and even
          a self made chat app. I'm currently working on a few projects as well
          as my degree.
        </p>
      </div>
      <div class="text-white background-card">
        <ul>
          <li>
            📚 I'm currently pursuing my BS in Mechanical Engineering
            Technology. I hope to one day work in motor sports in stage rally or
            open wheel racing.
          </li>
          <li>
            💬 Ask me about Overwatch 2. I compete in competitive team-play. I'm
            cripplingly addicted in a not-a-joke way.
          </li>
          <li>
            🌱 I’m currently learning about | | and | |.
          </li>
          <li>
            📫 If you want to reach me, you can{" "}
            <span
              class="email text-blue-400"
              title="Mail address in the footer!"
            >
              email
            </span>, or DM me on{" "}
            <span class="text-violet-300" title="@chrono__">Discord</span>.
          </li>
        </ul>
      </div>
    </div>
  );
}
