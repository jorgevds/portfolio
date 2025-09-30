import { BrandsList } from "./BrandsList";

interface HeroProps {}

const Brands: React.FC<HeroProps> = () => {
  return (
    <article className="m-auto my-24 text-center min-h-md w-full">
      <h2 className="mb-8 text-2xl sm:text-4xl">
        Already trusted by these brands
      </h2>
      <h3 className="text-xl sm:text-lg m-6"> And you should too</h3>

      <div className="flex flex-shrink-0 overflow-hidden h-[100px] w-9/12 mx-auto">
        <div className="flex flex-shrink-0 gap-8 animate-loop-scroll h-full w-full">
          <BrandsList />
        </div>
        <div className="flex flex-shrink-0 gap-8 animate-loop-scroll h-full w-full">
          <BrandsList />
        </div>
      </div>
    </article>
  );
};

export default Brands;
