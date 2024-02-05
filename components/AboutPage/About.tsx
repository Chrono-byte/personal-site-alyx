export default function About() {
  return (
    <div class="about background-card shrink">
      <p>
        I'm a software developer and freshman engineering technology student at
        {" "}
        <a class="gold">Purdue University in Indianapolis</a>. I've been
        programming for {new Date().getFullYear() - 2016}{" "}
        years and have experience with <a class="text-blue-200">C++</a>,{"  "}
        <a class="js">JavaScript</a>, and some light{" "}
        <a class="text-blue-300">TypeScript</a> and{" "}
        <a class="js" style={{ color: "yellow" }}>Python</a> knowledge.
      </p>
      <ul>
        <li>
          📚 I'm currently pursueing my BS in Mechanical Engineering Technology.
          I hope to one day work in motorsports in stage rally or open wheel
          racing.
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
          <a class="email text-blue-400" title="Mail address in the footer!">
            email
          </a>, or DM me on <a class="discord" title="@chrono__">Discord</a>.
        </li>
      </ul>
    </div>
  );
}
