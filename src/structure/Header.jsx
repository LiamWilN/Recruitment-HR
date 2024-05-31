import { LogoImage } from "../components/Images";
import LogoURL from "../assets/rmi_logo.png";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { HiddenMenu, MainMenu } from "../components/Menus";
import LogOutButton from "../components/Button";

const Header = ({ ItemClicked }) => {
  const [currentMenu, menuState] = useState(false);

  const LogoAlt = "Readyman, Inc.";

  return (
    <>
      <div className="border-b-2 border-sky-400 w-full h-1/6">
        <div className="mx-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 ml-4">
            <LogoImage
              props={{
                URL: LogoURL,
                ALT: LogoAlt,
              }}
            />

            <h1 className="font-bold text-xl">Readyman, Inc.</h1>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <MainMenu onItemClicked={ItemClicked} />
          </div>

          <LogOutButton />

          <div className="flex md:hidden">
            <button
              onClick={() => {
                menuState(!currentMenu);
              }}
            >
              {currentMenu ? (
                <X absoluteStrokeWidth className="mr-6" />
              ) : (
                <Menu absoluteStrokeWidth className="mr-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {currentMenu ? <HiddenMenu onItemClicked={ItemClicked} /> : false}
    </>
  );
};

export default Header;
