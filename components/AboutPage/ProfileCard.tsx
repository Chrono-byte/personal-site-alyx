import Clock from "../../islands/Clock.tsx";
import { TbBuilding, TbClock, TbMapPin } from "@preact-icons/tb";
import StyledPanel from "../BackgroundCard.tsx";

const iconProps = {
  size: 20,
  color: "#f0f0f0",
  name: "icon",
};

export default function ProfileCard() {
  return (
    <StyledPanel className="flex flex-col text-shadow-[1px_1px_0_rgb(0_0_0_/_100%)]">
      <div className="pb-4">
        <img
          src="/svg/25267581.svg"
          alt="image of female knight holding a sword"
          width="175"
          height="175"
          className="border-4 border-neutral-800 rounded-[30%]"
        />
      </div>

      <div className="pb-4">
        <p className="text-base font-semibold pb-0">Ellie</p>
        <p className="text-sm pb-0">
          @chrono__ <span className="font-extrabold text-violet-300">/</span>
          {" "}
          @chronobyte_
        </p>
      </div>

      <div className="grid grid-rows-3 max-w-lg whitespace-break-spaces">
        <div className="row-end-1 w-8 flex items-center">
          <TbBuilding {...iconProps} />
        </div>
        <span className="row-end-1 flex items-center">
          Indiana University Indianapolis
        </span>
        <div className="row-end-2 w-8 flex items-center">
          <TbMapPin {...iconProps} />
        </div>
        <span className="row-end-2 flex items-center">
          Indianapolis, IN, USA
        </span>
        <div className="row-end-3 w-8 flex items-center">
          <TbClock {...iconProps} />
        </div>
        <span className="row-end-3 flex items-center">
          <Clock />
        </span>
      </div>
    </StyledPanel>
  );
}
