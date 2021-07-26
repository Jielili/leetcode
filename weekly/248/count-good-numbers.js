/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    const mod = BigInt((1e+9) + 7)
    const yushu = BigInt(n % 2);
    const shang = BigInt(Math.floor(n / 2));
    const pow = (x, y) => {
        let res = 1n;
        while (y > 0) {
            if (y % 2n !== 0) res = res * x % mod;
            y = (y - y % 2n) / 2n;
            x = x * x % mod;
        }
        return res
    }
    return pow(5n, yushu + shang) * pow(4n, shang) % mod;
};

console.log(countGoodNumbers(5))
