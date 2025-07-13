export default function Footer() {
  return (
        <footer className="border-t border-gray-800 pt-8 pb-12 text-center  bg-gradient-to-br from-gray-900 to-black text-white  font-[family-name:var(--font-geist-sans)]">
          <p>© {new Date().getFullYear()} Ale Tube. All rights reserved.</p>
          <p className="mt-2">Designed with passion and too much coffee ☕</p>
        </footer>
  );
}