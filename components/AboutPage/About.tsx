export default function About() {
  return (
    <div class="flex flex-col gap-1 md:gap-3 shrink text-sm [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      <div class="text-white background-card">
        <p>
          Hi I'm Michael. I am a student at Indiana University Indianapolis.
        </p>
        <br />
        <p>
          I'm a self-taught software developer and have worked on a variety of
          different projects since I was 12. I have been programming for{" "}
          {new Date().getFullYear() - 2016} years and have experience with{" "}
          <span class="text-blue-200">C++</span>,{"  "}
          <span class="text-blue-300">TypeScript</span>,{" "}
          <span class="text-yellow-400">JavaScript</span>. I've worked on a few
          websites, a few Discord bots, and even a self made chat app. I'm
          currently working on a few projects as well as my degree.
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
              //   title="Mail address in the footer!"
              href={`mailto:${"me" + "@" + "michaelgummere.com"}`}
            >
              email
            </a>, or DM me on{" "}
            <span class="text-violet-300" title="@chrono__">Discord</span>.
          </li>
        </ul>
      </div>
    </div>
  );
}
