import type { SemanticTokens } from "@pandacss/dev";

const semanticTokens: SemanticTokens["colors"] = {
    palette: {
        default: { value: "{colors.umi.700}" },
        emphasized: { value: "{colors.umi.700/80}" },
        fg: { value: "{colors.white}" },
        text: { value: "{colors.umi.700}" },
        error: { value: "{colors.red.600}" },
        warning: { value: "{colors.yellow.300}" },
    },
    fg: {
        default: { value: "{colors.gray.900}" },
        muted: { value: "{colors.gray.600}" },
        subtle: { value: "{colors.gray.400}" },
        disabled: { value: "{colors.gray.400}" },
        error: { value: "{colors.red.500}" },
    },
    bg: {
        default: { value: "{colors.umi.700}" },
    },
};

export default semanticTokens;
