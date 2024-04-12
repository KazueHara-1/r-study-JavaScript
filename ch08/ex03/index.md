書籍8.2.1の 「再帰関数とスタック」には、関数が自身を数千回呼び出した場合はエラーが発生すると書かれている。

    プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

    回答：関数の中でさらに自身を呼び出した際、末尾再帰を行うことで「呼び出した側」の関数の状態を保持する必要が無いため（「呼び出された側」の関数の情報のみを覚えておけばよいため。末尾再帰を行わない場合、「呼び出した側」の関数の情報は「呼び出された側」の関数の計算が終わるまで保持されなければならず、スタックオーバーフローが起こる。）。

    JavaScript で末尾再帰最適化を実装している処理系を答えなさい。
    利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。
    https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

    回答：ブラウザとしては2023年からSafariが対応しているという情報は得られましたが、公式ドキュメントまでたどり着けませんでした…。