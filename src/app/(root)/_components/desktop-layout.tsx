"use client";

import { useState } from "react";
import { sva } from "../../../../styled-system/css";
import { Navbar } from "./navbar";
import { Title } from "./title";

// デスクトップレイアウト用のスタイルバリアント
const desktopLayoutStyle = sva({
    slots: ["container", "titleSection", "navbarSection"],
    base: {
        container: {
            display: { base: "none", md: "grid" },
            width: "100vw",
            height: "100lvh",
            gridTemplateRows: "1fr",
            gridTemplateColumns: "1fr 1fr",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
        },
        titleSection: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },
        navbarSection: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },
    },
});

export const DesktopLayout = () => {
    const styles = desktopLayoutStyle();
    const [shouldAnimateNavbar, setShouldAnimateNavbar] = useState(false);

    const handleTitleAnimationComplete = () => {
        setShouldAnimateNavbar(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <Title onAnimationComplete={handleTitleAnimationComplete} />
            </div>
            <div className={styles.navbarSection}>
                <Navbar shouldAnimate={shouldAnimateNavbar} />
            </div>
        </div>
    );
};
