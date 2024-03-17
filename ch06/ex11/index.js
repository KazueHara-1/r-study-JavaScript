export const obj = {
  r: 0,
  theta: 0,
  get x() {
    return this.r * Math.cos((this.theta * Math.PI) / 180);
  },
  get y() {
    return this.r * Math.sin((this.theta * Math.PI) / 180);
  },
  set x(value) {
    if (!isNaN(value)) {
      if (value === 0) {
        if (this.y < 0) {
          this.theta = 270;
        } else {
          this.theta = 90;
        }
      } else {
        const newR = Math.sqrt(value * value + this.y * this.y);
        this.theta = Math.atan(this.y / value);
        this.r = newR;
      }
    } else {
      // return new Error();
      // setter は値を返さないのでconsole.logにしました
      console.log('error');
    }
  },
  set y(value) {
    if (!isNaN(value)) {
      if (value === 0) {
        if (this.x < 0) {
          this.theta = 180;
        } else {
          this.theta = 0;
        }
      } else {
        const newR = Math.sqrt(this.x * this.x + value * value);
        this.theta = Math.atan(value / this.x);
        this.r = newR;
      }
    } else {
      // return new Error();
      // setter は値を返さないのでconsole.logにしました
      console.log('error');
    }
  },
};
