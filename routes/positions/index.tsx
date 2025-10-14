import BackgroundCard from "../../components/BackgroundCard.tsx";

const linkStyle =
  "text-md font-bold text-blue-400 hover:text-blue-600 underline hover:no-underline";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <BackgroundCard className="w-full md:max-w-3xl">
        <h1 className="font-bold">
          Essays and positions on technology, policy, and design.
        </h1>

        <nav aria-label="Position essays">
          <ul className="list-none space-y-2">
            <li>
              <a href="/positions/philosophy" className={linkStyle}>
                Philosophy
              </a>
            </li>
            <li>
              <a href="/positions/politics" className={linkStyle}>Politics</a>
            </li>
          </ul>
        </nav>
      </BackgroundCard>
    </div>
  );
}
