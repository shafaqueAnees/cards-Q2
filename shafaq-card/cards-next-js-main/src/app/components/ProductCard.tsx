import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl animate-pulse">
          Shafaque&apos;s Collection
        </h1>
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mt-2">
          Girl&apos;s Collection
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-screen-xl">
        {/* Card 1 */}
        <div className="bg-gold shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center p-6">
            <Image
              src="/shoes.webp"
              alt="Shoes"
              width={300}
              height={300}
              className="object-cover w-full h-[300px] rounded-md"
            />
          </div>
          <p className="text-center py-4 font-bold transition-colors duration-200 hover:text-gold">
            PKR-3,000
          </p>
          <div className="flex justify-center items-center mb-4">
            <button className="px-10 py-3 bg-yellow-500 text-black rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gold shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center p-6">
            <Image
              src="/bag.webp"
              alt="Bag"
              width={300}
              height={300}
              className="object-cover w-full h-[300px] rounded-md"
            />
          </div>
          <p className="text-center py-4 font-bold transition-colors duration-200 hover:text-gold">
            PKR-3,500
          </p>
          <div className="flex justify-center items-center mb-4">
            <button className="px-10 py-3 bg-yellow-500 text-black rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gold shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center p-6">
            <Image
              src="/watch.webp"
              alt="Watch"
              width={300}
              height={300}
              className="object-cover w-full h-[300px] rounded-md"
            />
          </div>
          <p className="text-center py-4 font-bold transition-colors duration-200 hover:text-gold">
            PKR-5,000
          </p>
          <div className="flex justify-center items-center mb-4">
            <button className="px-10 py-3 bg-yellow-500 text-black rounded-md transition-colors duration-300 hover:bg-red-600 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
