export default function Footer() {
  return (
    <footer className="w-full bg-rose-500 text-white">
      <div className="max-w-5xl mx-auto px-4 py-3 text-center text-sm">
        © {new Date().getFullYear()} — All rights reserved
      </div>
    </footer>
  );
}
