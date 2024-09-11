import { Button } from "@mui/material";
import AbbeyLogo from "../public/AbbeyLogo.png";
import BrandLogo from "./components/brand-logo";
import Prompt from "./components/prompt";

export default function Home() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <div className="font-bold md:text-6xl text-5xl text-center">
          Styled for You
        </div>
      </div>
      <BrandLogo img={AbbeyLogo} />
      <span className="md:w-4/5 w-full font-light">
        Say hello to effortless elegance with &ldquo;Styled for You&rdquo; by
        Abbey Glass, your personalized concierge. Imagine curated product
        recommendations that align perfectly with your personal tastes, needs
        and the unique shapes that make you, &ldquo;you&rdquo;. By answering a
        few quick questions about yourself, your upcoming event and your
        distinctive silhoutte, you unlock a world of custom style possibilities
        tailored just for you. Embrace the luxury of curated fashion and let
        Abbey Glass transform the way you shop--because you deserve nothing less
        than perfection. Discover your personalized style journey today.
      </span>
      <div className="flex flex-col gap-4 items-end">
        <Prompt
          emojiString={"\u{1F389}"}
          description="Tell us about your event (Mother of, wedding, black tie, cocktail,
            daytime)"
          topic="event"
        />
        <Prompt
          emojiString={"\u{1F60A}"}
          description="Tell us about yourself (age, location, style, favorite
            color, favorite brands)"
          topic="yourself"
        />
        <Prompt
          emojiString={"\u{1F4CF}"}
          description="Tell us about your shape (size, body considerations, coverage on
            arms/legs)"
          topic="shape"
        />
        <Button
          style={{ display: "flex", gap: "4px", color: "white" }}
          variant="contained"
          disabled={false}
          color="secondary"
        >
          <div>{"\u{2728}"}</div>
          <div className="font-bold">Style for me</div>
        </Button>
      </div>
      <div className="flex w-full md:w-4/5 justify-end"></div>
    </div>
  );
}
