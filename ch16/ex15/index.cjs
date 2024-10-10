const threads = require("worker_threads");

if (threads.isMainThread) {
  let num = 0;
  const worker = new threads.Worker(__filename);
  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      num++;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    worker.on("message", (message) => {
      if (message === "num をインクリメントせよ") {
        num++;
      } else {
        console.log(num);
      }
    });
  });
} else {
  for (let i = 0; i < 10_000_000; i++) {
    threads.parentPort.postMessage("num をインクリメントせよ");
  }
  threads.parentPort.postMessage("done");
}
