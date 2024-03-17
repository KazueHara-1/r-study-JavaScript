export const add = (array1, array2) => {
  const answer = new Array(2);
  answer[0] = new Array(array1[0].length);
  answer[1] = new Array(array1[1].length);
  for (let i = 0; i < 2; i++) {
    {
      for (let j = 0; j < array1[i].length; j++) {
        answer[i][j] = array1[i][j] + array2[i][j];
      }
    }
  }
  return answer;
};

// 2x2の行列しかありえない
export const mul = (array1, array2) => {
  const answer = new Array(2);
  answer[0] = new Array(2);
  answer[1] = new Array(2);
  for (let i = 0; i < 2; i++) {
    {
      for (let j = 0; j < 2; j++) {
        answer[i][j] =
          array1[i][0] * array2[0][j] + array1[i][1] * array2[1][j];
      }
    }
  }
  return answer;
};
