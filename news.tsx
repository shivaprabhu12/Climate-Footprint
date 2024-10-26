import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="min-h-screen bg-gray-100 bg-fixed bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D')] p-5">
      <button
        onClick={() => (window.location.href = "/")}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        {/* <Image
          src="/images/arrow_back_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
          alt="Back"
          width={20}
          height={20}
        /> */}
        Back
      </button>

      <header className="text-center my-5">
        <h1 className="text-3xl text-gray-800 font-semibold">News Headlines</h1>
      </header>

      <main className="flex flex-col gap-4">
        {[
          { title: "Headline 1", summary: "Summary of the news article 1..." },
          { title: "Headline 2", summary: "Summary of the news article 2..." },
          { title: "Headline 3", summary: "Summary of the news article 3..." },
        ].map((news, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-60 border border-gray-300 rounded-lg shadow p-5"
          >
            <h2 className="text-xl text-gray-800 mb-2">{news.title}</h2>
            <p className="text-gray-600">{news.summary}</p>
            <Link href="#" className="text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
