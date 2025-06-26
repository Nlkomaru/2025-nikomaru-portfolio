import { css } from "../../../../styled-system/css";
import { Title } from "./title";
import { Navbar } from "./navbar";

export const Root = () => {
    return (
        <>
            <div
                className={css({
                    display: "grid",
                    width: "100vw",
                    height: "100vh",
                    gridTemplateRows: "1fr",
                    gridTemplateColumns: "1fr 1fr",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                })}
            >
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    })}
                >
                    <Title />
                </div>
                
                <div
                    className={css({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    })}
                >
                    <Navbar />
                </div>
            </div>
        </>
    );
};
