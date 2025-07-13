import Hero from "@/components/Hero";
import LatestVideo from "@/components/LatestVideo";
import Merch from "@/components/Merch";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white  font-[family-name:var(--font-geist-sans)]">

      <Hero/>
      <LatestVideo/>
      <Merch/>
            {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Ale Tube Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to get exclusive merch drops, special discounts, and content updates
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

          </div>
  );
}
