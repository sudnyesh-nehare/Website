export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-white border-b border-gray-100">
      
      {/* Logo / Brand Name */}
      <span className="text-xl font-bold text-black">MyStartup</span>

      {/* Nav Links */}
      <ul className="flex gap-8 text-sm text-gray-600">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* CTA Button */}
      <button className="bg-black text-white text-sm px-5 py-2 rounded-full">
        Get Started
      </button>

    </nav>
  )
}