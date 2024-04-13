// TODO: 3, 5個めのテストがうまく動かないので後に修正
export const counterGroup = () => {
  return {
    n: 0,
    newCounter: function () {
      return {
        count: () => {
          return this.n++;
        },
        reset: () => {
          this.n = 0;
        },
      };
    },
    total: function () {
      return this.n;
    },
  };
};
