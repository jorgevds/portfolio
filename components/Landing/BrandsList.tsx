import Image from 'next/image';

interface BrandedLogoProps {
    src: string;
    alt: string;
    isScalableVector: boolean;
    classList?: string;
}

const BrandedLogo = (props: BrandedLogoProps) => {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={150}
            height={75}
            className={`max-w-none minmd:w-[150px] w-[100px] h-full ${props.classList} minmd:pr-[35px]`}
        />
    );
};

const brands: BrandedLogoProps[] = [
    {
        src: '/brands/made.svg',
        alt: 'Made logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/rombit.webp',
        alt: 'Rombit logo',
        isScalableVector: false,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/techyard.png',
        alt: 'Techyard logo',
        isScalableVector: false,
        classList: 'grayscale',
    },
    {
        src: '/brands/zeticon.svg',
        alt: 'Zeticon logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/etex.png',
        alt: 'ETEX logo',
        isScalableVector: false,
        classList: 'grayscale',
    },
    {
        src: '/brands/cronos.svg',
        alt: 'Cronos logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/steelduxx.svg',
        alt: 'Steelduxx logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/octoo.svg',
        alt: 'Octoo logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/henco.png',
        alt: 'Henco logo',
        isScalableVector: false,
        classList: 'grayscale',
    },
    {
        src: '/brands/sweet-mustard.svg',
        alt: 'Sweet Mustard logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/promat.jpg',
        alt: 'Promat logo',
        isScalableVector: false,
        classList: 'grayscale',
    },
    {
        src: '/brands/noest.svg',
        alt: 'Noest logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/euronav.png',
        alt: 'Euronav logo',
        isScalableVector: false,
        classList: 'grayscale',
    },
    {
        src: '/brands/cronos-aan-de-leie.svg',
        alt: 'Cronos aan de Leie logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
    {
        src: '/brands/electrolux.svg',
        alt: 'Electrolux logo',
        isScalableVector: true,
        classList: 'chroma-icon',
    },
];

export const BrandsList = () => {
    return (
        <>
            {brands.map((brand) => (
                <BrandedLogo key={brand.src} {...brand} />
            ))}
        </>
    );
};
