import { css } from "../../styled-system/css";
import { getLorem } from "../lib/lorem";

export default function Home() {
    return (
        <div
            className={css({
                color: "fg.text",
            })}
        >
            その後、友達とcoffee breakを取る予定だよ。
            {getLorem("en", 100)}
            {getLorem("ja", 1000)}
        </div>
    );
}
