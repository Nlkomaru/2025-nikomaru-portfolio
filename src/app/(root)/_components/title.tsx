"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { css } from "../../../../styled-system/css";

export const Title = () => {
    const { setTheme, theme } = useTheme();
    const [clientTheme, setClientTheme] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        setClientTheme(theme);
    }, [theme]);

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
                lineHeight: "normal",
                _firstLetter: {
                    fontFamily: "var(--font-montserrat)",
                },
            })}
            initial={{ x: "-200%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            Nikomaru
            <br />
            Portfolio
        </motion.h1>
    );
};
