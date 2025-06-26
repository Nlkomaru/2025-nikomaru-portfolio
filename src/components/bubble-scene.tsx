"use client";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const colorRange: Record<string, { min: number; max: number }> = {
    blue: {
        min: 180,
        max: 280,
    },
    green: {
        min: 140,
        max: 180,
    },
};

const getRandomPastelColor = (isDark: boolean, colorRangeName: string) => {
    const lightness = isDark ? 35 : 80 + Math.random() * 10; //lightnessは20～90
    const chroma = isDark ? 10 : 20 + Math.random() * 10; //chromaは10～30
    const hue =
        Math.floor(
            Math.random() *
                (colorRange[colorRangeName].max -
                    colorRange[colorRangeName].min),
        ) + colorRange[colorRangeName].min; //hueは200-280
    const alpha = 0.3;
    return `oklch(${lightness}% ${chroma}% ${hue} / ${alpha})`; // hsl(色相, 彩度, 明度)
};

type Circle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
};

const params = {
    speed: {
        base: 1,
        diffLimit: 0.2,
    },
    count: 17,
    radius: {
        min: 0.5,
        max: 1.2,
    },
};

const BubbleScene = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const circlesRef = useRef<Circle[]>([]);
    const pathname = usePathname();
    const { theme } = useTheme();
    const [speed, setSpeed] = useState(0);
    const [colorRange, setColorRange] = useState<string>("blue");

    useEffect(() => {
        setSpeed(1);
        if (typeof window === "undefined") return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context) return;

        const isDark = theme === "dark";

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.clientHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const footerHeight =
            document.getElementById("footer")?.clientHeight || 0;
        const count =
            params.count * (document.body.clientHeight / window.innerHeight);
        circlesRef.current = Array.from({ length: count }).map(() => {
            const radius =
                Math.random() * (params.radius.max - params.radius.min) +
                params.radius.min;
            const adjustedRadius =
                radius * Math.min(canvas.width, window.innerHeight) * 0.15;

            const getRandomVelocity = () =>
                (Math.random() * (1 - params.speed.diffLimit) +
                    params.speed.diffLimit) *
                params.speed.base *
                (Math.random() < 0.5 ? -1 : 1);

            return {
                x:
                    Math.random() * (canvas.width - 2 * adjustedRadius) +
                    adjustedRadius,
                y:
                    Math.random() *
                        (canvas.height - footerHeight - 2 * adjustedRadius) +
                    adjustedRadius,
                vx: getRandomVelocity(),
                vy: getRandomVelocity(),
                color: getRandomPastelColor(isDark, colorRange),
                size: radius,
            };
        }, [theme, pathname, speed, colorRange]);

        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            for (const circle of circlesRef.current) {
                circle.x += circle.vx;
                circle.y += circle.vy;
                const radius =
                    circle.size *
                    Math.min(canvas.width, window.innerHeight) *
                    0.15;

                if (circle.x > canvas.width - radius || circle.x < radius) {
                    circle.vx = -circle.vx;
                }

                if (
                    circle.y > canvas.height - footerHeight - radius ||
                    circle.y < radius
                ) {
                    circle.vy = -circle.vy;
                }

                context.beginPath();
                context.arc(circle.x, circle.y, radius, 0, Math.PI * 2);
                context.fillStyle = circle.color;
                context.fill();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [theme, pathname, speed]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                //画面全体でなく、ページ全体
                zIndex: -100,
            }}
        />
    );
};

export default BubbleScene;
