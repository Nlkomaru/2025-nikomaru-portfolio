import type { Metadata } from "next";
import "./globals.css";
import Scene from "../component/scene";
import '@fontsource/zen-kaku-gothic-antique/500.css';


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
        <html lang="en">
            <body>
                <Scene />
                {children}
            </body>
        </html>
    );
}
