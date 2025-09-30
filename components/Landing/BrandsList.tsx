import Image from "next/image";

interface BrandedLogoProps {
  src: string;
  alt: string;
  isScalableVector: boolean;
  classList?: string;
}

const BrandedLogo = (props: BrandedLogoProps) => {
  return (
    <div className="w-[150px] h-full flex items-center">
      <Image
        src={props.src}
        alt={props.alt}
        width={150}
        height={75}
        className={`max-w-none w-full h-auto ${props.classList}`}
      />
    </div>
  );
};

const brands: BrandedLogoProps[] = [
  {
    src: "/brands/made.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/rombit.webp",
    alt: "Made sux",
    isScalableVector: false,
    classList: "chroma-icon",
  },
  {
    src: "/brands/techyard.png",
    alt: "Made sux",
    isScalableVector: false,
    classList: "grayscale",
  },
  {
    src: "/brands/zeticon.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/etex.png",
    alt: "Made sux",
    isScalableVector: false,
    classList: "grayscale",
  },
  {
    src: "/brands/cronos.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/steelduxx.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/octoo.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/henco.png",
    alt: "Made sux",
    isScalableVector: false,
    classList: "grayscale",
  },
  {
    src: "/brands/sweet-mustard.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/promat.jpg",
    alt: "Made sux",
    isScalableVector: false,
    classList: "grayscale",
  },
  {
    src: "/brands/noest.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/euronav.png",
    alt: "Made sux",
    isScalableVector: false,
    classList: "grayscale",
  },
  {
    src: "/brands/cronos-aan-de-leie.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
  {
    src: "/brands/electrolux.svg",
    alt: "Made sux",
    isScalableVector: true,
    classList: "chroma-icon",
  },
];

export const BrandsList = () => {
  return (
    <>
      {brands.map((brand) => (
        <BrandedLogo key={brand.src} {...brand} />
      ))}
      <div className="w-[35px]" />
    </>
  );
};
