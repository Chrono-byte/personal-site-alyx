// import Clock from "./Clock.tsx";
import Clock from "../../islands/Clock.tsx";
import ClockIcon from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/clock.tsx";
import College from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/building.tsx";
import MapPin from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/map-pin.tsx";

const iconProps = {
  size: 24,
  color: "#f0f0f0",
  stroke: 1.75,
};

export default function ProfileCard() {
  return (
    <div
      className="flex flex-col [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]"
      style={{
        background: "rgba(10, 8, 0, 0.70)",
        color: "#f0f0f0",
        borderRadius: "0.8rem",
        border: "6.45px solid #2b2b2b",
        padding: "25px",
      }}
    >
      <div className="pb-4">
        <img
          src="/svg/25267581.svg"
          alt="image of female knight holding a sword"
          width={"175px"}
          height={"175px"}
          style={{ border: "6px solid #333", borderRadius: "29.97%" }}
        />
      </div>
      <div className="pb-4">
        <p className="text-base font-semibold pb-0">Ellie Gummere</p>
        <p className="text-sm pb-0">
          @chrono__ <span className="font-extrabold text-violet-300">/</span>
          {" "}
          @chronobyte_
        </p>
      </div>
      <style>
        {`
#profile-card-text {
  height: 30px;
  line-height: 30px;
}
      `}
      </style>
      <div className="grid grid-rows-3 max-w-lg whitespace-break-spaces">
        <div className="row-end-1 w-8">
          <div className="m-1">
            {College(iconProps)}
          </div>
        </div>
        <span className="row-end-1">
          Indiana University Indianapolis
        </span>
        <div className="row-end-2 w-8">
          <div className="m-1">
            {MapPin(iconProps)}
          </div>
        </div>
        <span className="row-end-2">Indianapolis, IN, USA</span>
        <div className="row-end-3 w-8">
          <div className="m-1">
            {ClockIcon(iconProps)}
          </div>
        </div>
        <Clock />
      </div>
    </div>
  );
}
