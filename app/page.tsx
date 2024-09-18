import { AbbeyGlassHook } from "@/public/AbbeyGlassHook";
import AbbeyLogo from "../public/Abbey-Glass.png";
import BrandHook from "./components/brand-hook";
import BrandLogo from "./components/brand-logo";
import Prompt from "./components/prompt";
import ResponseBox from "./components/response-box";
import UserDetails from "./components/user-details";

export default function Home() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <div className="font-bold md:text-5xl text-4xl text-center">
          Styled for You | Abbey Glass
        </div>
      </div>
      <BrandLogo img={AbbeyLogo} />
      <BrandHook hook={AbbeyGlassHook} />
      <UserDetails />
      <div className="flex flex-col items-end rounded-md w-full md:w-4/5 gap-1">
        <Prompt
          emojiString={"\u{1F389}"}
          description="Tell us about your event!"
          placeholderText="(Mother of, wedding, black tie, cocktail,
            daytime)"
          topic="event"
        />
        <Prompt
          emojiString={"\u{1F60A}"}
          description="Tell us about yourself!"
          topic="yourself"
          placeholderText="(style, favorite
            colors, favorite brands)"
        />
        <Prompt
          emojiString={"\u{1F4CF}"}
          description="Tell us about your shape!"
          topic="shape"
          placeholderText="(body considerations, coverage on
            arms/legs)"
        />
      </div>
      <ResponseBox />
      <div className="flex w-full md:w-4/5 justify-end"></div>
    </div>
  );
}
