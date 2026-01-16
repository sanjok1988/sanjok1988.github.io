
// app/page.jsx (for App Router - Next.js 13+)
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-slate-900 to-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gradient-to-tr from-gray-800/80 to-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Support Our Mission
          </h1>
          <div className="w-24 h-1 bg-indigo-400/90 mx-auto rounded-full"></div>
        </div>

        {/* Inspiring Text */}
        <div className="text-center mb-8 space-y-4">
          <p className="text-xl md:text-2xl text-gray-200 font-medium">
            "Be the change you wish to see in the world"
          </p>
          <p className="text-gray-300 leading-relaxed">
            Your contribution, no matter how small, makes a meaningful difference. 
            Together, we can create positive impact and build something extraordinary.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every donation helps us continue our work and reach more people. 
            Thank you for believing in our vision and being part of this journey.
          </p>
        </div>

        {/* QR Code Image */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-4 rounded-xl shadow-lg border-2 border-indigo-900/60">
            <Image
              src="/image/payme.jpeg"
              alt="Payment QR Code"
              width={300}
              height={300}
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold text-indigo-300">
            Scan the QR code to contribute
          </p>
          <p className="text-sm text-gray-400">
            Your generosity powers our mission forward
          </p>
        </div>

        {/* Footer Message */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            💙 Thank you for your support and trust 💙
          </p>
        </div>
      </div>
    </div>
  );
}
