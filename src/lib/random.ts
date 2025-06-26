export class Random {
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(seed = 88675123) {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }

    // XorShift
    next() {
        const t = this.x ^ (this.x << 11);
        this.x = this.y;
        this.y = this.z;
        this.z = this.w;
        this.w = this.w ^ (this.w >>> 19) ^ (t ^ (t >>> 8));
        return this.w;
    }

    // min以上max以下の乱数を生成する
    nextInt(min = 0, max = 1) {
        const r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    }

    nextFloat(min = 0, max = 1) {
        return min + (this.next() / 0xffffffff) * (max - min);
    }
}

export function genHash(message: string): number {
    // 同期的に動作するシンプルなハッシュ関数
    // FNV-1a ハッシュアルゴリズムの簡易版を使用
    let hash = 2166136261; // FNV offset basis (32-bit)

    for (let i = 0; i < message.length; i++) {
        hash = hash ^ message.charCodeAt(i); // XOR with octet
        hash = hash * 16777619; // Multiply with FNV prime
        hash = hash >>> 0; // Keep it 32-bit unsigned
    }

    return Math.abs(hash); // 絶対値を返して負の数を避ける
}
