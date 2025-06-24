import { defineTokens } from "@pandacss/dev";
import { gray } from "./gray";
import { red } from "./red";
import { umi } from "./umi";
import { white } from "./white";
import { yellow } from "./yellow";

// 基本的な色パレットを定義
export const colors = defineTokens.colors({
    ...umi,
    ...white,
    ...yellow,
    ...red,
    ...gray,
});
