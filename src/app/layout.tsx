import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { css } from "../../styled-system/css";
import { Footer } from "../components/footer";
import Scene from "../components/scene";
import { fonts } from "../lib/fonts";

export const metadata: Metadata = {
    title: "にこまるのポートフォリオ",
    description: "にこまるのポートフォリオです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body className={`${css({ textStyle: "body" })} ${fonts}`}>
                <ThemeProvider
                    enableSystem={false}
                    defaultTheme={"light"}
                    value={{
                        light: "light",
                        dark: "dark",
                    }}
                >
                    <Scene />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
