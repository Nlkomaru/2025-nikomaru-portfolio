"use client";

import { motion } from "motion/react";
import { css } from "../../../../styled-system/css";

interface TitleProps {
    onAnimationComplete?: () => void;
}

export const Title = ({ onAnimationComplete }: TitleProps) => {
    return (
        <motion.h1
            className={css({
                fontFamily: "var(--font-montserrat-alternates)",
                fontSize: {
                    base: "32px",
                    md: "48px",
                    lg: "64px",
                },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: 1.2,
                margin: 0,
                padding: 0,
                _firstLetter: {
                    fontFamily: "var(--font-montserrat)",
                },
            })}
            initial={{ x: "-200%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={onAnimationComplete}
        >
            Nikomaru
            <br />
            Portfolio
        </motion.h1>
    );
};
