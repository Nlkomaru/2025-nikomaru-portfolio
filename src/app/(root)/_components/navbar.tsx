"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { css } from "../../../../styled-system/css";
import { NAVIGATION_ITEMS } from "../../../lib/constants/urls";

interface NavbarProps {
    shouldAnimate?: boolean;
}

export const Navbar = ({ shouldAnimate = false }: NavbarProps) => {
    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "1.5rem",
                margin: 0,
                padding: 0,
            })}
        >
            {NAVIGATION_ITEMS.map((item, index) => (
                <Link href={item.href} key={item.id}>
                    <motion.div
                        className={css({
                            fontSize: {
                                base: "24px",
                                md: "32px",
                                lg: "36px",
                            },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                        })}
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                            shouldAnimate
                                ? { y: 0, opacity: 1 }
                                : { y: 20, opacity: 0 }
                        }
                        transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.3,
                            ease: "easeOut",
                        }}
                    >
                        {item.label_EN}
                    </motion.div>
                </Link>
            ))}
        </div>
    );
};
