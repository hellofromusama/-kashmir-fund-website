'use client';

import Link from 'next/link';
import KashmirLeaves from '@/components/KashmirLeaves';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const protestDemands = [
    "Abolition of the 12 legislative seats in the AJK Assembly reserved for Kashmiri refugees settled in Pakistan.",
    "Ending/abolishing the privileges and perks of the political elite (ministers, high officials) and reducing special benefits.",
    "Reduced/fair electricity tariffs, especially electricity price based on production cost from local hydel (e.g. Mangla Dam).",
    "Subsidised flour or wheat/food essentials.",
    "Free and equal education for all citizens.",
    "Improved telecom/internet/mobile services, especially in remote areas.",
    "Abolition of the refugee job quotas/reserved quota for refugees in jobs.",
    "Removal/reform of quota systems in general in AJK.",
    "Infrastructure demands: several road/tunnel construction projects. Examples include roads in Jhelum Valley; tunnels like Shohr Tunnel, Lohar Gali–Muzaffarabad, Leepa Valley Tunnel; improvement of connectivity.",
    "An international airport in AJK.",
    "Clean drinking water and irrigation water for agricultural areas.",
    "Addressing commercial electricity billing issues (particularly for bills above certain KWVA).",
    "Better governance and accountability; implementation of laws/reforms in power sector."
  ];

  const newsArticles = [
    {
      title: "Current Protests in Azad Kashmir: People's Demands for Justice",
      date: "October 2025",
      category: "Protests",
      content: `The people of Azad Jammu and Kashmir are currently protesting for their basic rights and demanding fair treatment from the government. These peaceful protests highlight the urgent need for reforms in governance, infrastructure, and essential services.

The movement has gained widespread support from citizens across all regions, calling for transparency, accountability, and immediate action on critical issues affecting daily life.`
    },
    {
      title: "13 Key Demands from Kashmir Protest Movement",
      date: "October 2025",
      category: "Demands",
      content: `The protest movement has put forward 13 comprehensive demands addressing fundamental issues facing the people of Azad Kashmir. These demands focus on political reforms, economic justice, infrastructure development, and improved public services.

Key areas of concern include electricity tariffs based on local hydel production costs, abolition of elite privileges, improved connectivity through road and tunnel projects, and ensuring equal access to education and essential services for all citizens.`
    },
    {
      title: "Overseas Support Crucial for Kashmir Cause",
      date: "October 2025",
      category: "International",
      content: `The Kashmir protest movement urgently needs support from the international community and overseas Kashmiris. Your voice, donations, and advocacy can make a significant difference in bringing attention to these legitimate demands.

Ways to help: Donate to support affected families, share information on social media, contact your local representatives, and raise awareness in your communities about the situation in Azad Kashmir.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 text-white overflow-hidden">
      {/* Falling Kashmir Leaves Animation */}
      <KashmirLeaves />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="pt-12 relative z-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 py-12 mb-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Latest News & Updates
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed about the current situation and protest demands in Azad Jammu and Kashmir
            </p>
          </div>
        </div>

        {/* Urgent Call to Action */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">🆘</span>
              <h2 className="text-3xl font-bold text-red-400">Urgent: Overseas Support Needed</h2>
            </div>
            <p className="text-xl text-slate-200 mb-4">
              <strong className="text-white">We need help from overseas people to support the Kashmiri people during these protests.</strong>
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Your donations will help provide essential support to families affected by the ongoing protests, including food, medical care, and legal assistance. Every contribution makes a difference in this critical time.
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💚 Donate Now to Support Kashmir
            </Link>
          </div>
        </div>

        {/* Protest Demands Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-400 flex items-center gap-3">
              <span className="text-4xl">✊</span>
              13 Demands from Current Protests in Azad Jammu and Kashmir
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              The people of Azad Kashmir are demanding the following reforms from the government:
            </p>
            <div className="space-y-4">
              {protestDemands.map((demand, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-green-400 min-w-[3rem]">{index + 1}.</span>
                    <p className="text-slate-200 text-lg leading-relaxed">{demand}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News Articles */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white">Recent Updates</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{article.title}</h3>
                <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {article.content}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/50 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4 text-white">How You Can Help</h3>
            <p className="text-xl text-slate-200 mb-6 max-w-3xl mx-auto">
              Your support can make a real difference. Donate today to help families affected by the protests and support the movement for justice in Azad Kashmir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💚 Make a Donation
              </Link>
              <Link
                href="/usage"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                📊 View Fund Usage
              </Link>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Spread the Word</h3>
            <p className="text-lg text-slate-300 mb-6">
              Share this page to raise awareness about the Kashmir protests and help gather international support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Support Kashmir Protests',
                      text: 'Help support the people of Azad Kashmir in their fight for justice',
                      url: window.location.href,
                    });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📱 Share
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=Support%20the%20Kashmir%20protest%20movement%20-%20Help%20provide%20essential%20support%20to%20families&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                🐦 Tweet
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                📘 Share on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
