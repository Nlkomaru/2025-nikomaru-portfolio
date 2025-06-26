import { css } from "../../../styled-system/css";
import { getLorem } from "../../lib/lorem";
import { Root } from "./_components/root";

export default function Home() {
    return (
        <div
            className={css({
                height: "100vh",
            })}
        >
            <Root />
            その後、友達とcoffee breakを取る予定だよ。
        </div>
    );
}
