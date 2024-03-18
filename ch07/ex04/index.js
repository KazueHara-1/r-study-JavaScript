const data = [
  { name: 'Alice', class: 'A', math: 10, chemistry: 30, geography: 20 },
  { name: 'Bob', class: 'A', math: 50, chemistry: 50, geography: 60 },
  { name: 'Carol', class: 'A', math: 70, chemistry: 55, geography: 30 },
  { name: 'Dave', class: 'B', math: 40, chemistry: 20, geography: 60 },
  { name: 'Ellen', class: 'B', math: 60, chemistry: 70, geography: 40 },
  { name: 'Frank', class: 'B', math: 90, chemistry: 70, geography: 80 },
  { name: 'Isaac', class: 'C', math: 70, chemistry: 40, geography: 50 },
  { name: 'Justin', class: 'C', math: 80, chemistry: 40, geography: 30 },
  { name: 'Mallet', class: 'C', math: 60, chemistry: 70, geography: 90 },
];

// mathの全員の合計点
console.log(data.reduce((acc, current) => acc + current.math, 0));
// クラスAのchemistryの平均点
console.log(
  data.reduce((acc, current) => {
    if (current.class === 'A') {
      return acc + current.chemistry;
    } else {
      return acc;
    }
  }, 0)
);
// 3科目合計点のクラスC内での平均点
const classCSum = data.reduce((acc, current) => {
  if (current.class === 'C') {
    return acc + current.math + current.chemistry + current.geography;
  } else {
    return acc;
  }
}, 0);
console.log(classCSum / 3);
// 3科目合計点が最も高い人のname
const ep = data.reduce(
  (acc, current) => {
    const currentScore = current.math + current.chemistry + current.geography;
    if (currentScore > acc.score) {
      return { name: current.name, score: currentScore };
    } else {
      return acc;
    }
  },
  { name: '', score: 0 }
);
console.log(ep.name);
// 全体のgeographyの標準偏差
const geoSum = data.reduce((acc, current) => acc + current.geography, 0);
const geoAve = geoSum / data.length;
const s = data.reduce(
  (acc, current) => acc + Math.pow(current.geography - geoAve, 2),
  0
);
console.log(Math.sqrt(s / data.length));
