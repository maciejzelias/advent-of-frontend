export class ChristmasQueue<T> {
  constructor() {}
  queue: Map<number, T[]> = new Map();

  enqueue = (name: T, priority: number) => {
    const priorityItems = this.queue.get(priority);
    if (!priorityItems) {
      this.queue.set(priority, [name]);
      return;
    }
    priorityItems.push(name);
    this.queue.set(priority, priorityItems);
  };

  dequeue = (): T => {
    if (this.isEmpty()) {
      throw new Error('There are no letters in the queue!');
    }
    const highestPriority = Math.max(...this.queue.keys());
    const priorityItems = this.queue.get(highestPriority)!; // Since we only keep non-empty keys in map, we can use !

    const firstElement = priorityItems[0];
    priorityItems.shift();

    if (priorityItems.length === 0) {
      this.queue.delete(highestPriority);
      return firstElement;
    }
    this.queue.set(highestPriority, priorityItems);
    return firstElement;
  };

  isEmpty = () => {
    return this.queue.size === 0;
  };
}
