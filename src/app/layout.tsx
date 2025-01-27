import type { Metadata } from "next";
import "./style/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";



export const metadata: Metadata = {
  title: "Professional Food Truck Website Design to Boost Your Business",
  description: "Get a professional and visually appealing food truck website designed to showcase your brand and attract more customers. I specialize in creating modern, responsive websites tailored to the unique needs of food truck businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>
        
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
        
    </html>
  );
}
