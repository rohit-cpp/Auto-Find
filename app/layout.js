import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import CarFinderFooter from "@/components/footer";
import CarFinderHeader from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoFind",
  description: "Find your First Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <header>
            <CarFinderHeader />
          </header>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer>
            {" "}
            <CarFinderFooter />{" "}
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
