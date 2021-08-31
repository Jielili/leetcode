class Solution {
  constructor(w) {
    // const len = w.length;
    // this.pre = new Array(len).fill(0)
    // this.pre[0] = w[0];
    // for (let i = 1; i < len; i++){
    //   this.pre[i] = this.pre[i-1] + w[i]
    // }
    // this.total = this.pre[len - 1]
    this.len = w.length;
      // 定义前缀和数组
      this.pre = new Array(this.len).fill(0);
      this.pre[0] = w[0];
      // 从i=1开始，求每个位置的前缀和
      for (let i = 1; i < this.len; i++) {
          this.pre[i] = this.pre[i - 1] + w[i];
      }
      // 总和
      this.total = this.pre[this.len - 1];this.len = w.length;
      // 定义前缀和数组
      this.pre = new Array(this.len).fill(0);
      this.pre[0] = w[0];
      // 从i=1开始，求每个位置的前缀和
      for (let i = 1; i < this.len; i++) {
          this.pre[i] = this.pre[i - 1] + w[i];
      }
      // 总和
      this.total = this.pre[this.len - 1];
  }
  pickIndex() {
    // [0,1)*this.total = [0, this.total)
    const x = Math.floor(Math.random() * this.total) + 1
    let low = 0, high = this.pre.length - 1
    while (low <= high) {
      const mid = (low + high) << 1
      // 1 4 9 23 45 11
      if (x <= this.pre[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }
}