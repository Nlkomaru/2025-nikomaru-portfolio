"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { Menu as MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { sva } from "../../styled-system/css";
import { NAVIGATION_ITEMS } from "../lib/constants/urls";

// ハンバーガーメニューコンポーネントのスタイル定義
const hamburgerMenuStyles = sva({
    slots: [
        "root",
        "trigger",
        "icon",
        "backdrop",
        "positioner",
        "content",
        "closeTrigger",
        "closeIcon",
        "menuContainer",
        "menuList",
        "menuItem",
        "linkContainer",
        "itemTitle",
        "itemDescription",
    ],
    base: {
        // ルートコンテナ
        root: {},

        // ハンバーガーボタン
        trigger: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        // ハンバーガーアイコン
        icon: {
            width: "24px",
            height: "24px",
        },

        // 背景オーバーレイ
        backdrop: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100lvh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
        },

        // ダイアログのポジショナー
        positioner: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100lvh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
        },

        // メインコンテンツ
        content: {
            position: "relative",
            backgroundColor: "white",
            padding: "64px 32px",
            width: "100vw",
            height: "100lvh",
            minWidth: "320px",
            boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },

        // 閉じるボタン
        closeTrigger: {
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },

        // 閉じるアイコン
        closeIcon: {
            width: "24px",
            height: "24px",
        },

        // メニューコンテナ
        menuContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flex: 1,
        },

        // メニューリスト
        menuList: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            listStyle: "none",
            margin: 0,
            padding: 0,
        },

        // メニューアイテム
        menuItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "stretch",
        },

        // リンクコンテナ
        linkContainer: {
            textDecoration: "none",
            color: "black",
            _hover: {
                textDecoration: "none",
            },
        },

        // アイテムタイトル
        itemTitle: {
            alignSelf: "stretch",
            textAlign: "center",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "22px",
            marginBottom: "4px",
        },

        // アイテム説明
        itemDescription: {
            alignSelf: "stretch",
            textAlign: "center",
            fontSize: "10px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "16px",
            color: "token(text.emphasized)",
        },
    },
});

interface HamburgerMenuProps {
    shouldAnimate?: boolean;
}

export const HamburgerMenu = ({
    shouldAnimate = false,
}: HamburgerMenuProps) => {
    const styles = hamburgerMenuStyles();

    return (
        <motion.div
            className={styles.root}
            initial={{ scale: 0, opacity: 0 }}
            animate={
                shouldAnimate
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
            }
            transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
            }}
        >
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button type="button" className={styles.trigger}>
                        <MenuIcon className={styles.icon} />
                    </button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop className={styles.backdrop} />
                    <Dialog.Positioner className={styles.positioner}>
                        <Dialog.Content className={styles.content}>
                            <Dialog.CloseTrigger asChild>
                                <button
                                    type="button"
                                    className={styles.closeTrigger}
                                >
                                    <XIcon className={styles.closeIcon} />
                                </button>
                            </Dialog.CloseTrigger>

                            <div className={styles.menuContainer}>
                                <ul className={styles.menuList}>
                                    {NAVIGATION_ITEMS.map((item, index) => (
                                        <motion.li
                                            className={styles.menuItem}
                                            key={item.href}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.1 + index * 0.1,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={styles.linkContainer}
                                            >
                                                <div>
                                                    <div
                                                        className={
                                                            styles.itemTitle
                                                        }
                                                    >
                                                        {item.label_JA}
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.itemDescription
                                                        }
                                                    >
                                                        {item.label_EN}
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </motion.div>
    );
};
