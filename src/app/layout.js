import "./globals.css";
import { Press_Start_2P, Courier_Prime } from "next/font/google";
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
  display: "swap",
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pressStart.variable} ${courierPrime.variable} bg-black overflow-x-hidden`} style={{ fontFamily: "var(--font-mono), monospace" }}>
        {children}
      </body>
    </html>
  );
}
