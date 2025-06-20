import { defineConfig } from "@pandacss/dev";
import semanticTokens from "./src/tokens/color/semantic-token";
import { tokens } from "./src/tokens";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens,
            semanticTokens,
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
