import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Head from "next/head";

import { Header } from "./Header";
import { ThemeProvider } from "~/components/ThemeProvider";
import { AuthProvider } from "~/components/auth/auth-provider";
import { TanstackQueryClientProvider } from "~/components/auth/TanStackQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pomodoro with pals",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider
            defaultTheme="break-light"
            themes={["work-light", "break-light"]}
            attribute="class"
          >
            <TanstackQueryClientProvider>
              <ReactQueryDevtools />
              <Head>Hi</Head>
              <main className="min-h-screen bg-gradient-to-br from-background-work to-background-break">
                <Header />
                <div className="container h-full">{children}</div>
              </main>
            </TanstackQueryClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
