"use client";
import { useEffect, useRef } from "react";
import { css } from "../../styled-system/css";

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
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGradient();
        };

        const drawGradient = () => {
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

                    // 出現確率 (右下ほど高い)
                    const appearProb = intensity * 0.75; // 0.00〜0.75
                    if (Math.random() > appearProb) continue;

                    // 点サイズと透明度
                    const size = 0.6 + intensity; // 0.6〜2.6
                    const alpha = intensity * 0.8; // 0.0〜0.5

                    ctx.fillStyle = `color-mix(in oklab, ${baseColor} ${alpha * 100}%, transparent)`;
                    ctx.beginPath();
                    ctx.arc(
                        x + (Math.random() - 0.5) * grid,
                        y + (Math.random() - 0.5) * grid,
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

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -100,
            })}
        />
    );
}
