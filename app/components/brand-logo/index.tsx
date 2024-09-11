import Image, { StaticImageData } from "next/image";

type BrandLogoProps = {
  img: StaticImageData;
};

const BrandLogo = ({ img }: BrandLogoProps) => {
  return (
    <Image
      height={200}
      width={200}
      className="rounded-lg border border-solid border-secondary-tan"
      src={img}
      alt="brand-logo"
    />
  );
};

export default BrandLogo;
