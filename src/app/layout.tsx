import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Static Fetching Next JS image gallery"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <SSRProvider>
          <Container className="py-4">
            {children}
          </Container>
        </SSRProvider>
      </body>
    </html>
  );
}
