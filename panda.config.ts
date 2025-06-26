import {
    defineConfig,
    defineGlobalStyles,
    defineTextStyles,
} from "@pandacss/dev";
import { tokens } from "./tokens";
import semanticTokens from "./tokens/color/semantic-token";

export const textStyles = defineTextStyles({
    body: {
        description: "The body text style - used in paragraphs",
        value: {
            fontFamily:
                "var(--font-poppins), var(--font-zen-kaku-gothic-antique), Fluent Emoji Color",
            fontSize: {
                base: "md",
                md: "md",
                lg: "lg",
            },
            lineHeight: "1.8",
            fontWeight: "400",
        },
    },
});

const globalCss = defineGlobalStyles({
    "*::selection": {
        bg: "token(palette.default)/50",
    },
    // リセットスタイル - 白色の縁を削除
    "html, body": {
        margin: 0,
        padding: 0,
        height: "100%",
        boxSizing: "border-box",
    },
    "*, *::before, *::after": {
        boxSizing: "inherit",
    },
    //linkのスタイルを削除
    a: {
        textDecoration: "none",
        color: "inherit",
    },
});

export default defineConfig({
    // Whether to use css reset
    globalCss,
    preflight: false,

    // Where to look for your css declarations
    include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/component/**/*.{js,jsx,ts,tsx}",
    ],
    conditions: {
        extend: {
            light: "[data-theme=light] &",
            dark: "[data-theme=dark] &",
        },
    },
    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            textStyles,
            tokens,
            semanticTokens,
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
