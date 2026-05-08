import { BrandsList } from "./BrandsList";

interface HeroProps {}

const Brands: React.FC<HeroProps> = () => {
  return (
    <article className="m-auto my-24 sm:mb-12 text-center min-h-md w-full">
      <h2 className="mb-8 text-2xl sm:text-4xl">
        Already trusted by these brands
      </h2>
      <h3 className="text-xl sm:text-lg m-6 mb-12"> And you should too</h3>

      <div className="minmd:flex minmd:flex-shrink-0 minmd:overflow-hidden minmd:h-[100px] sm:min-h-[100px] minmd:w-9/12 minmd:mx-auto w-full sm:px-4">
        <div className="flex sm:flex-wrap minmd:flex-shrink-0 gap-8 minmd:animate-loop-scroll minmd:h-full sm:min-h-[100px] sm:justify-center sm:items-center">
          <BrandsList />
        </div>

        <div className="minmd:flex flex-shrink-0 gap-8 animate-loop-scroll h-full hidden">
          <BrandsList />
        </div>
      </div>
    </article>
  );
};

export default Brands;
