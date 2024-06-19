import { Crypto } from "@peculiar/webcrypto";

global.crypto = new Crypto();

export class PromisePool {
  status: "start" | "stop" = "stop";
  queSize: number;
  maxRunningPromises: number;
  runningPromises: { id: string; promise: () => Promise<void> }[] = [];
  que: { id: string; promise: () => Promise<void> }[] = [];
  /**
   * Constructs PromisePool.
   *
   * @param queueSize the max size of queue
   * @param maxRunningPromises the maximum number of running promises at the same time.
   *
   * @throws Error if either queueSize or maxRunningPromises is less than 1
   */
  constructor(queueSize: number, maxRunningPromises: number) {
    if (queueSize < 1) {
      throw new Error("queueSize must be larger than 0");
    } else if (maxRunningPromises < 1) {
      throw new Error("maxRunningPromises must be larger than 0");
    }
    this.queSize = queueSize;
    this.maxRunningPromises = maxRunningPromises;
  }

  /**
   * Starts PromisePool.
   *
   * @returns Promise, which will be rejected if this pool is already started
   */
  async start() {
    if (this.status === "start") {
      throw new Error("PromisePool is already started.");
    }
    this.status = "start";
  }

  /**
   * Wait all promises for their terminations.
   * All requests dispatched before this method is invoked must complete
   * and this method also will wait for their completion.
   *
   * @returns Promise, which will be rejected if this pool has not been started.
   */
  async stop() {
    if (this.status === "stop") {
      throw new Error("PromisePool is not started.");
    }
    this.status = "stop";
  }

  /**
   * Executes the specified promise from the given factory using this pool.
   * If the queue is full, then the returned Promise will not be fulfilled until the queue is not full.
   *
   * @param promiseFactory the function that returns Promise
   *
   * @returns Promise, which will be rejected if this pool has not been started.
   */
  async dispatch(promiseFactory: () => Promise<void>): Promise<void> {
    if (this.status === "stop") {
      throw new Error("PromisePool is not started.");
    }
    if (this.runningPromises.length < this.maxRunningPromises) {
      const uuid = crypto.randomUUID();
      // 一度runningPromisesに追加
      this.runningPromises.push({ id: uuid, promise: promiseFactory });
      // 実行を待つ
      await promiseFactory();
      // 実行が終わったらrunningPromisesから削除
      // そもそも同じ配列を非同期であまりいじりたくないが…
      const index = this.runningPromises.findIndex((el) => el.id === uuid);
      this.runningPromises.splice(index, 1);
    } else if (this.que.length < this.queSize) {
      const uuid = crypto.randomUUID();
      this.que.push({ id: uuid, promise: promiseFactory });
    }
  }
}
