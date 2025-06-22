import { defineTokens } from "@pandacss/dev";
import { umi } from "./umi";
import { white } from "./white";
import {yellow} from "./yellow";
import { red } from "./red";
import { gray } from "./gray";

// 基本的な色パレットを定義
export const colors = defineTokens.colors({
    ...umi,
    ...white,
    ...yellow,
    ...red,
    ...gray
});