import { defineTokens } from "@pandacss/dev";

//https://color-palette.nikomaru.workers.dev/?data=%5B%7B%22colorValue%22%3A%22rgba%28107%2C+169%2C+255%2C+1%29%22%2C%22colorId%22%3A%22umi%22%2C%22uniqueId%22%3A2%7D%2C%7B%22colorValue%22%3A%22%23eee8aa%22%2C%22colorId%22%3A%22palegoldenrod%22%2C%22uniqueId%22%3A3%7D%2C%7B%22colorValue%22%3A%22rgba%28255%2C+255%2C+255%2C+1%29%22%2C%22colorId%22%3A%22beige%22%2C%22uniqueId%22%3A4%7D%2C%7B%22colorValue%22%3A%22%23000080%22%2C%22colorId%22%3A%22navy%22%2C%22uniqueId%22%3A5%7D%2C%7B%22colorValue%22%3A%22%2300ff00%22%2C%22colorId%22%3A%22lime%22%2C%22uniqueId%22%3A6%7D%2C%7B%22colorValue%22%3A%22rgba%28255%2C+0%2C+0%2C+1%29%22%2C%22colorId%22%3A%22beige%22%2C%22uniqueId%22%3A7%7D%2C%7B%22colorValue%22%3A%22%237cfc00%22%2C%22colorId%22%3A%22lawngreen%22%2C%22uniqueId%22%3A8%7D%5D&mode=sigmoid&gain=1.3
export const red = defineTokens.colors({
    red: {
        100: { value: "oklch(0.92 0.26 29.23 / 1.00)" },
        200: { value: "oklch(0.90 0.26 29.23 / 1.00)" },
        300: { value: "oklch(0.87 0.26 29.23 / 1.00)" },
        400: { value: "oklch(0.81 0.26 29.23 / 1.00)" },
        500: { value: "oklch(0.73 0.26 29.23 / 1.00)" },
        600: { value: "oklch(0.63 0.26 29.23 / 1.00)" }, // これだけ完全一致
        700: { value: "oklch(0.52 0.26 29.23 / 1.00)" },
        800: { value: "oklch(0.42 0.26 29.23 / 1.00)" },
        900: { value: "oklch(0.34 0.26 29.23 / 1.00)" },
        1000: { value: "oklch(0.28 0.26 29.23 / 1.00)" },
        1100: { value: "oklch(0.25 0.26 29.23 / 1.00)" },
        1200: { value: "oklch(0.22 0.26 29.23 / 1.00)" },
    },
});
