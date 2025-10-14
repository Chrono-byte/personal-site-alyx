import Clock from "../../islands/Clock.tsx";
import { TbBuilding, TbClock, TbMapPin } from "@preact-icons/tb";
import StyledPanel from "../BackgroundCard.tsx";

const iconProps = {
  size: 16,
  color: "#f0f0f0",
  name: "icon",
};

export default function ProfileCard() {
  return (
    <StyledPanel className="max-h-full w-1/3 md:w-4/12 flex flex-col items-start text-shadow mb-6 rounded-3xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      <img
        src="/svg/25267581.svg"
        alt="avatar: stylized knight illustration holding a sword"
        width="159"
        height="159"
        className="border-4 border-neutral-800 rounded-2xl w-36 h-36 object-cover mb-3"
      />

      <div className="text-left w-full">
        <p className="text-lg font-semibold">Ellie</p>
        <div className="text-base text-slate-200 mt-1 space-y-1">
          <span className="text-fuchsia-200">@chrono__</span>
        </div>
      </div>

      <div className="mt-3 w-full space-y-3 text-lg">
        <div className="flex items-center gap-3">
          <TbBuilding {...iconProps} />
          <span className="text-base">Indiana University Indianapolis</span>
        </div>

        <div className="flex items-center gap-3">
          <TbMapPin {...iconProps} />
          <span className="text-base">Indianapolis, IN, USA</span>
        </div>

        <div className="flex items-center gap-3">
          <TbClock {...iconProps} />
          <span className="text-base">
            <Clock />
          </span>
        </div>
      </div>
    </StyledPanel>
  );
}
