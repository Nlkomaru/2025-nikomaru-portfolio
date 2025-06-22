import { defineConfig } from "@pandacss/dev";
import semanticTokens from "./tokens/color/semantic-token";
import { tokens } from "./tokens";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/component/**/*.{js,jsx,ts,tsx}"],

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
