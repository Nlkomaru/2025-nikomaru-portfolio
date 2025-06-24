import type { Metadata } from "next";
import "./globals.css";
import { css } from "../../styled-system/css";
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
        <html lang="ja">
            <body className={`${css({ textStyle: "body" })} ${fonts}`}>
                {" "}
                <Scene />
                {children}
            </body>
        </html>
    );
}
