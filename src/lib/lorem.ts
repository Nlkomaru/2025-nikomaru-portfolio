const enLorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const jaLorem =
    "小田原熱海間に、軽便鉄道敷設の工事が始まったのは、良平の八つの年だった。良平は毎日村外れへ、その工事を見物に行った。工事を――といったところが、唯トロッコで土を運搬する――それが面白さに見に行ったのである。トロッコの上には土工が二人、土を積んだ後に佇んでいる。トロッコは山を下るのだから、人手を借りずに走って来る。煽るように車台が動いたり、土工の袢天の裾がひらついたり、細い線路がしなったり――良平はそんなけしきを眺めながら、土工になりたいと思う事がある。せめては一度でも土工と一しょに、トロッコへ乗りたいと思う事もある。トロッコは村外れの平地へ来ると、自然と其処に止まってしまう。と同時に土工たちは、身軽にトロッコを飛び降りるが早いか、その線路の終点へ車の土をぶちまける。それから今度はトロッコを押し押し、もと来た山の方へ登り始める。良平はその時乗れないまでも、押す事さえ出来たらと思うのである。";

export function getLorem(lang: "en" | "ja" = "en", length = 100) {
    if (lang === "en") {
        if (length > enLorem.length) {
            const repeatCount = Math.ceil(length / enLorem.length);
            const repeatedLorem = enLorem.repeat(repeatCount);
            return repeatedLorem.slice(0, length);
        }
        return enLorem.slice(0, length);
    }
    if (length > jaLorem.length) {
        const repeatCount = Math.ceil(length / jaLorem.length);
        const repeatedLorem = jaLorem.repeat(repeatCount);
        return repeatedLorem.slice(0, length);
    }
    return jaLorem.slice(0, length);
}
