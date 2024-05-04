import ModernUIBrandLogo from "../../assets/logos/modernui-brand-logo.svg?react";
import { CallToActButton } from "../Buttons/CallToActButton";

export const MenuBar = () => {
  return (
    <nav className="content-layout">
      <ul className="flex items-center justify-between">
        <li>
          <div className="h-8">
            <ModernUIBrandLogo className="h-full w-fit" />
          </div>
        </li>
        <li>
          <CallToActButton
            onClick={() => {
              const elem = document.getElementById("showcase-section");
              elem?.scrollIntoView({ block: "center" });
            }}
          >
            Start Now →
          </CallToActButton>
        </li>
      </ul>
    </nav>
  );
};
