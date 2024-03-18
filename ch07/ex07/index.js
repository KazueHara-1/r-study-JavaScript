export const sort = (array) => {
  const newArray = [...array];

  for (let i = 0; i < newArray.length; i++) {
    //後ろから前に向かって小さい値を浮かび上がらせるfor文
    for (let j = newArray.length - 1; j > i; j--) {
      //隣りあう２つの値を比べて、後ろが小さければ交換する
      if (newArray[j] > newArray[j - 1]) {
        const tmp = newArray[j];
        newArray[j] = newArray[j - 1];
        newArray[j - 1] = tmp;
      }
    }
  }
  return newArray;
};
