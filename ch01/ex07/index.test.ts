import { Point } from "./index.ts";

describe("Point test", () => {
  it("add() test", () => {
    const Point_1 = new Point(1, 1);
    const Point_2 = new Point(2, 3);
    Point_1.add(Point_2);
    expect(Point_1.x).toBe(3);
    expect(Point_1.y).toBe(4);
  });
});
