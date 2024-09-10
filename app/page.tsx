import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Avatar, Button, colors } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-4 flex flex-col justify-center items-center gap-6">
      <div className="flex gap-2 items-center justify-center">
        <div className="text-5xl">{"\u{1F457}"}</div>
        <div className="font-bold md:text-5xl text-4xl text-center">
          Styled for You
        </div>
      </div>
      <Avatar
        sx={{
          bgcolor: colors.teal.A200,
          border: "2px solid black",
          width: "100px",
          height: "100px",
          fontSize: "72px",
        }}
      >
        <PermIdentityIcon htmlColor="black" fontSize="inherit" />
      </Avatar>
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
        <Link
          href="/event"
          className="w-full flex gap-2 items-center md:text-lg bg-purple-300 p-4 rounded-md border-solid border-2 border-black"
        >
          <div>{"\u{1F389}"}</div>
          <div className="font-bold">
            Tell us about your event (Mother of, wedding, black tie, cocktail,
            daytime)
          </div>
        </Link>
        <Link
          href="/yourself"
          className="w-full flex gap-2 items-center md:text-lg bg-purple-300 p-4 rounded-md border-solid border-2 border-black"
        >
          <div>{"\u{1F60A}"}</div>
          <div className="font-bold">
            Tell us about your yourself (age, location, vibe, style, favorite
            color, favorite brands)
          </div>
        </Link>
        <Link
          href="/shape"
          className="w-full flex gap-2 items-center md:text-lg bg-purple-300 p-4 rounded-md border-solid border-2 border-black"
        >
          <div>{"\u{1F4CF}"}</div>
          <div className="font-bold">
            Tell us about your shape (size, body considerations, coverage on
            arms/legs)
          </div>
        </Link>
        <Button
          style={{ display: "flex", gap: "4px", border: "2px solid black" }}
          variant="contained"
          disabled={false}
          color="primary"
        >
          <div>{"\u{2728}"}</div>
          <div className="font-bold">Style for me</div>
        </Button>
      </div>
      <div className="flex w-full md:w-4/5 justify-end"></div>
    </div>
  );
}
