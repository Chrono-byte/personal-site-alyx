import Countdown from "../../islands/updateTime.tsx";
import { clockSvg, collegeSvg, locationSvg } from "./images.tsx";

export default function ProfileCard() {
  return (
    <div
      class="flex flex-col profile-card w-fit [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]"
      style={{
        background: "rgba(10, 8, 0, 0.70)",
        color: "#f0f0f0",
        // minWidth: "",
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
        <p className="text-sm pb-0">@chrono__ / @chronobyte_</p>
      </div>
      <style>
        {`
.profile-card li, .profile-card span {
  height: 30px;
  line-height: 30px;
}
      `}
      </style>
      <div class="grid auto-cols-auto grid-rows-3 max-w-lg text-sm list-none">
        <div className="col-end-1">{collegeSvg}</div>
        <li className="col-end-2">
          Indiana University Indianapolis
        </li>
        <div className="col-end-1">{locationSvg}</div>
        <li className="col-end-2">Greater Indianapolis, IN, USA</li>
        <div className="col-end-1">{clockSvg}</div>
        <Countdown />
      </div>
    </div>
  );
}
