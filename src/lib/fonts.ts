import {
    Montserrat,
    Montserrat_Alternates,
    Poppins,
    Zen_Kaku_Gothic_Antique,
} from "next/font/google";

const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
    weight: "500",
    variable: "--font-zen-kaku-gothic-antique",
    display: "swap",
    subsets: ["latin"],
});

const poppins = Poppins({
    weight: "400",
    variable: "--font-poppins",
    display: "swap",
    subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
    weight: "500",
    variable: "--font-montserrat-alternates",
    display: "swap",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: "500",
    variable: "--font-montserrat",
    display: "swap",
    subsets: ["latin"],
});

const fontList = [
    zenKakuGothicAntique,
    poppins,
    montserratAlternates,
    montserrat,
];

const fonts = fontList
    .map((font) => {
        return font.variable;
    })
    .join(" ");

export { fonts };
