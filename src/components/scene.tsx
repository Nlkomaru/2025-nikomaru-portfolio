"use client";
import { useEffect, useRef } from "react";
import { css } from "../../styled-system/css";
import { genHash, Random } from "../lib/random";

export default function Scene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasNullable = canvasRef.current;
        if (!canvasNullable) return;

        const canvas = canvasNullable;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // キャンバスサイズを設定
        const resizeCanvas = () => {
            // 100lvh相当のピクセル値を直接取得
            // screen.heightは物理画面の高さ、window.innerHeightは現在のビューポート
            const largeLvhHeight = Math.max(
                window.screen.height,
                window.screen.availHeight,
                document.documentElement.clientHeight,
                window.innerHeight,
            );

            const viewportWidth = window.innerWidth;

            canvas.width = viewportWidth;
            canvas.height = largeLvhHeight;

            // CSSでも同じサイズに設定
            canvas.style.width = `${viewportWidth}px`;
            canvas.style.height = `${largeLvhHeight}px`;

            drawGradient(
                new Random(viewportWidth * largeLvhHeight).nextInt(0, 1000000),
            );
        };

        const drawGradient = (seed: number) => {
            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            const baseColor =
                getComputedStyle(canvas)
                    .getPropertyValue("--palette-default")
                    .trim() || "rgb(0, 0, 0)";

            const grid = 2; // 点を配置するグリッド間隔
            for (let y = 0; y < height; y += grid) {
                for (let x = 0; x < width; x += grid) {
                    // 対角線方向の直線的な進行度（0: 右下, 1: 左上）
                    const diagProgress =
                        ((width - x) / width + (height - y) / height) / 2;
                    const intensity = Math.max(0, 0.7 - diagProgress); // 右下 1 → 左上 0
                    const hash = genHash(`${seed}-${x}-${y}-1`);
                    const rng = new Random(hash);

                    // 出現確率 (右下ほど高い)
                    const appearProb = intensity * 0.75; // 0.00〜0.75
                    if (rng.nextFloat() > appearProb) continue;

                    // 点サイズと透明度
                    const size = 0.5 + intensity; // 0.3~1.3
                    const alpha = intensity * 0.8; // 0.0〜0.5

                    ctx.fillStyle = `color-mix(in oklab, ${baseColor} ${alpha * 100}%, transparent)`;
                    ctx.beginPath();
                    ctx.arc(
                        x + (rng.nextFloat() - 0.5) * grid,
                        y + (rng.nextFloat() - 0.5) * grid,
                        size,
                        0,
                        Math.PI * 2,
                    );
                    ctx.fill();
                }
            }
        };

        // 初期描画
        resizeCanvas();

        // リサイズイベントリスナー
        window.addEventListener("resize", resizeCanvas);

        // ビジュアルビューポートのリサイズイベント（モバイルのアドレスバー対応）
        if (window.visualViewport) {
            window.visualViewport.addEventListener("resize", resizeCanvas);
        }

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener(
                    "resize",
                    resizeCanvas,
                );
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh", // 初期値、JavaScriptで上書き
                zIndex: -100,
                // モバイルでのスクロール問題を防ぐ追加設定
                touchAction: "none",
                overflow: "hidden",
            })}
        />
    );
}
