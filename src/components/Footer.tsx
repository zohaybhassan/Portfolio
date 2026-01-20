export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold hover:text-emerald-400 transition-colors"
          >
            <span className="text-emerald-500">{'<'}</span>
            Zohaib Hassan
            <span className="text-emerald-500">{'/>'}</span>
          </button>

          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
