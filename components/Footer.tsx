export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {currentYear} Fund for Azad Kashmir. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Supporting humanitarian efforts in Azad Kashmir
            </p>
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-xs mb-1">Website Developed By</p>
              <p className="text-white font-semibold text-sm">Usama Javed</p>
              <p className="text-slate-400 text-xs">Full Stack Developer</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/hellofromusama/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-lg border border-pink-500/30 hover:border-pink-500/50 transition-all text-sm"
                title="Follow on Instagram"
              >
                <span className="text-lg">📱</span>
                <span className="text-white font-medium">@hellofromusama</span>
              </a>
              <a
                href="https://usamajaved.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg border border-slate-600 hover:border-slate-500 transition-all text-sm"
                title="Visit Portfolio"
              >
                <span className="text-lg">🌐</span>
                <span className="text-white font-medium">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
