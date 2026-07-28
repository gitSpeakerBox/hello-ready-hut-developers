import type { Metadata, Viewport } from "next";
import "@/styles/style";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ready Hut Developers | Premium Builders & Villa Projects in Calicut",
  description: "Ready Hut Developers is a premier real estate and construction company in Calicut, Kerala, specializing in luxury gated community villas, architectural design, and project management.",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: "favicon_io/android-chrome-192x192.png",
    apple: "favicon_io/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`relative bg-[#F1B352] text-[#2E2F34] z-0 ${poppins.className} object-cover`}
    >
      <body className="relative z-0  bg-[#F1B352] text-[#2E2F34]">
        {children}
      </body>
    </html>
  );
}
