// https://stackoverflow.com/questions/57478484/how-to-test-custom-web-component-with-jest
import "./index.js";

describe("inline-circle", () => {
  test("border-color-test", () => {
    document.body.innerHTML =
      '<inline-circle border-color="red"></inline-circle>';
    const circle = document.querySelector("inline-circle");

    // default
    expect(circle.style.width).toBe("0.8em");
    expect(circle.style.height).toBe("0.8em");
    expect(circle.style.backgroundColor).toBe("");
    // expect(circle.style.borderColor).toBe("black");
    expect(circle.style.borderWidth).toBe("1px");

    // border-color
    expect(circle.style.borderColor).toBe("red");
  });
  test("border-width-test", () => {
    document.body.innerHTML =
      '<inline-circle border-width="3px"></inline-circle>';
    const circle = document.querySelector("inline-circle");

    // default
    expect(circle.style.width).toBe("0.8em");
    expect(circle.style.height).toBe("0.8em");
    expect(circle.style.backgroundColor).toBe("");
    expect(circle.style.borderColor).toBe("black");
    // expect(circle.style.borderWidth).toBe("1px");

    // border-color
    expect(circle.style.borderWidth).toBe("3px");
  });
});
