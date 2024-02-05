import Countdown from "../../islands/updateTime.tsx";

const collegeSvg = (
  <img
    src="/svg/college.svg"
    alt="language icon"
    style={{
      width: "30px",
      height: "30px",
    }}
    class="pr-3"
  />
);

const locationSvg = (
  <img
    src="/svg/location.svg"
    alt="language icon"
    style={{
      width: "30px",
      height: "30px",
    }}
    class="pr-3"
  />
);

const clockSvg = (
  <img
    src="/svg/clock.svg"
    alt="language icon"
    style={{
      width: "30px",
      height: "30px",
    }}
    class="pr-3"
  />
);

const languageSvg = (
  <img
    src="/svg/language.svg"
    alt="language icon"
    style={{
      width: "30px",
      height: "30px",
    }}
    class="pr-3"
  />
);

export default function ProfileCard() {
  return (
    <div
      class="flex flex-col profile-card [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]"
      style={{
        background: "rgba(10, 8, 0, 0.70)",
        color: "#f0f0f0",
        minWidth: "20vw",
        borderRadius: "0.8rem",
        border: "6.45px solid #2b2b2b",
        padding: "25px",
      }}
    >
      <div class="pb-4">
        <img
          src="/svg/25267581.svg"
          alt="image of female knight holding a sword"
          width={"175px"}
          height={"175px"}
          style={{ border: "6px solid #333", borderRadius: "29.97%" }}
        />
      </div>
      <div class="pb-4">
        <p className="text-base pb-0">Michael Gummere</p>
        <p className="text-sm pb-0">@chrono / @chronobyte</p>
      </div>
      <div class="flex flex-col max-w-lg text-sm">
        <p class="flex flex-row pb-2">
          {collegeSvg}
          <span style="">Purdue University in Indianapolis</span>
        </p>
        <p class="flex flex-row pb-2">
          {locationSvg}
          <span class="inline-block align-middle">Indianapolis, IN, USA</span>
        </p>
        <p class="flex flex-row pb-2">
          {clockSvg}
          <Countdown />
        </p>
        <div class="flex flex-row pb-2">
          {languageSvg}
          <div class="inline-block align-middle">
            <span>
              🇺🇸 (native)
            </span>
            <br />
            <span>
              🇫🇷 (beginner)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
