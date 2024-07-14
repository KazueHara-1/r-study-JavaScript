const nav = document.querySelector("nav");
Array.from(nav.children).map((child) => console.log(`1. ${child.outerHTML}`));

console.log(
  `2. ${document.querySelector(".product-list").querySelector(".product-item").outerHTML}`
);

console.log(`3. ${document.querySelector('img[alt="カート"]').outerHTML}`);

const productList = document.querySelector(".product-list");
Array.from(productList.children).map((child) =>
  console.log(`4. ${child.querySelector(".price").outerHTML}`)
);

Array.from(productList.children).map((child) =>
  console.log(`5. ${child.querySelector("img").outerHTML}`)
);

console.log(
  `6. ${document.querySelector(".search-bar").querySelector("button").outerHTML}`
);
console.log(
  `7. ${document.querySelector("footer").querySelector("p").outerHTML}`
);
Array.from(productList.children).map((child, index) => {
  if (index % 2 == 1) {
    console.log(`8. ${child.outerHTML}`);
  }
});
console.log(
  `9. ${document.querySelector("header").querySelector(".account").querySelector("img").outerHTML}`
);
Array.from(nav.children).map((child) => {
  if (child.textContent === "会社情報") {
    console.log(`10. ${child.outerHTML}`);
  }
});
