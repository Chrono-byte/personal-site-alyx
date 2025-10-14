import BackgroundCard from "../../components/BackgroundCard.tsx";

const linkStyle = "text-md font-bold text-violet-300 hover:text-white";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <BackgroundCard className="w-full md:max-w-3xl">
        <h1 className="font-bold">
          Essays and positions on technology, policy, and design.
        </h1>

        <a href="/positions/philosophy" className={linkStyle}>Philosophy</a>
        <br />
        <a href="/positions/politics" className={linkStyle}>Politics</a>
      </BackgroundCard>
    </div>
  );
}
