import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen"
         style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
      
      <header className="flex items-center gap-6 p-6">
        <Image src="/image.PNG" width={200} height={200} alt="Climate Logo" className="rounded-full" />
        <h1 className="text-transparent bg-clip-text text-[4rem] md:text-[5rem] lg:text-[6rem] leading-tight bg-gradient-to-r from-fuchsia-950 via-fuchsia-600 to-fuchsia-800 ">
          Climate Footprint
        </h1>
      </header>
      
      <main className="px-8 py-4">
        <p className="text-lg text-justify mb-8 text-black">
        A climate footprint refers to the total greenhouse gas emissions produced
      directly and indirectly by an individual, organization, or product over a
      specific period. It encompasses various activities, including energy
      consumption, transportation, and waste production, contributing to global
      warming and environmental degradation. Reducing one’s climate footprint is
      essential for mitigating climate change, and can be achieved through
      adopting sustainable practices like using renewable energy, minimizing
      waste, and opting for public transportation. By being aware of our climate
      footprints, we can make informed choices that promote a healthier planet
      for future generations. Collective efforts to lower our carbon emissions
      can lead to significant positive impacts on the environment.
        </p>

        <h3 className="text-xl font-semibold mb-4">Resources</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Repeat the following card for each resource */}
          <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="https://www.climaterealityproject.org/sites/default/files/styles/card_large/public/2024-10/chris-karidis-nnzkZNYWHaU-unsplash.jpg.webp?h=c2b9f5f0&itok=PRJ7LmI0"
              alt="Card image cap"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <a href="https://www.climaterealityproject.org/blog/how-climate-change-impacting-france" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-black hover:text-blue-600">
                How Climate Change Is Impacting France
              </a>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="https://www.climaterealityproject.org/sites/default/files/styles/card_large/public/2024-10/IMG_4715.jpg.webp?h=d19db5af&itok=J9t6ffM6"
              alt="Card image cap"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <a href="https://www.climaterealityproject.org/blog/letter-asheville" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-black hover:text-blue-600">
                How Climate Change Is Impacting France
              </a>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <img
              src="https://www.climaterealityproject.org/sites/default/files/styles/card_large/public/2024-08/maud-correa-louS5ssEPjM-unsplash.jpg.webp?h=0d27ee61&itok=W6uoqr4-"
              alt="Card image cap"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <a href="https://www.climaterealityproject.org/blog/rise-unnatural-disasters-drought" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-black hover:text-blue-600">
                How Climate Change Is Impacting France
              </a>
            </div>
          </div>
          
          {/* Add more cards as needed */}
        </div>
      </main>
      
      
    </div>
  );
}
