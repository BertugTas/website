export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-white/15">
          bertugtas.com.tr
        </span>
        <span className="font-mono text-xs text-white/15">
          © {new Date().getFullYear()} Bertuğ Taş · İzmir
        </span>
      </div>
    </footer>
  );
}
