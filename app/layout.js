import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sürücü Kursu",
  description: "Sürücü Kursu Yeniler İçin",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="business" lang="en">
      <body className={inter.className}>
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
