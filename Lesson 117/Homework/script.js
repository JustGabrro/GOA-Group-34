class MathHelper {
    static PI = Math.PI;
    static E = Math.E;

    static power(base, exponent) {
        return Math.pow(base, exponent);
    }

    static sqrt(number) {
        return Math.sqrt(number);
    }

    static factorial(n) {
        if (n < 0) return undefined;
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }
}

class RandomHelper {
    static CHAR_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    static randomLetter() {
        return this.CHAR_SET[Math.floor(Math.random() * this.CHAR_SET.length)];
    }

    static randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static randomString(length) {
        return Array.from({ length }, () => this.randomLetter()).join('');
    }
}

class TimeHelper {
    constructor() {
        this.CREATION_TIME = Date.now();
    }

    convertMsToReadable(ms) {
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor(ms / (1000 * 60 * 60));

        return [hours, minutes, seconds]
            .map(unit => String(unit).padStart(2, '0'))
            .join(':');
    }

    getCurrentTime() {
        const now = new Date();
        return [now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(unit => String(unit).padStart(2, '0'))
            .join(':');
    }
}
