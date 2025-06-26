"use client";

import { useState } from "react";
import { sva } from "../../../../styled-system/css";
import { HamburgerMenu } from "../../../components/menu";
import { Title } from "./title";

// モバイルレイアウト用のスタイルバリアント
const mobileLayoutStyle = sva({
    slots: ["container", "menuButton", "titleSection"],
    base: {
        container: {
            display: { base: "flex", md: "none" },
            flexDirection: "column",
            width: "100vw",
            height: "100lvh",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            minHeight: "100lvh",
        },
        menuButton: {
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 100,
        },
        titleSection: {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(0, -50%)",
            margin: 0,
            padding: 0,
            paddingLeft: "3rem",
            width: "auto",
            flexShrink: 0,
        },
    },
});

export const MobileLayout = () => {
    const styles = mobileLayoutStyle();
    const [shouldAnimateMenu, setShouldAnimateMenu] = useState(false);

    const handleTitleAnimationComplete = () => {
        setShouldAnimateMenu(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.menuButton}>
                <HamburgerMenu shouldAnimate={shouldAnimateMenu} />
            </div>
            <div className={styles.titleSection}>
                <Title onAnimationComplete={handleTitleAnimationComplete} />
            </div>
        </div>
    );
};
