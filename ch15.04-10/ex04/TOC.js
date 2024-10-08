javascript: (() => {
  /* NOTE: ブックマークレットによって実行する想定のため DOMContentLoaded のイベントで実行しない */
  let toc = document.querySelector("#TOC");
  if (!toc) {
    toc = document.createElement("div");
    toc.id = "TOC";
    document.body.prepend(toc);
  }

  /* NOTE: スタイルを設定 */
  let style = document.querySelector("#TOC-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "TOC-style";
    document.body.prepend(style);
  }
  style.textContent =
    '\n  #TOC {\n    border: solid black 1px;\n    margin: 10px;\n    padding: 10px;\n\n    /* 追加 (右上に固定表示) */\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 250px;\n    padding: 10px;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    overflow-y: auto;\n    max-height: calc(100vh - 40px);\n    z-index: 9999;\n  }\n  .TOCEntry { margin: 5px 0px; }\n  .TOCEntry a { text-decoration: none; }\n  .TOCLevel1 { font-weight: bold; }\n  .TOCLevel2 { margin-left: .25in; }\n  .TOCLevel3 { margin-left: .5in; }\n  .TOCSectNum:after { content: ": "; }\n      ';

  /* NOTE: 以下は書籍のサンプルと同じ */
  let headings = document.querySelectorAll("h2,h3,h4,h5,h6");
  let sectionNumbers = [0, 0, 0, 0, 0];
  for (let heading of headings) {
    if (heading.parentNode === toc) {
      continue;
    }
    let level = parseInt(heading.tagName.charAt(1)) - 1;
    sectionNumbers[level - 1]++;
    for (let i = level; i < sectionNumbers.length; i++) {
      sectionNumbers[i] = 0;
    }
    let sectionNumber = sectionNumbers.slice(0, level).join(".");
    let span = document.createElement("span");
    span.className = "TOCSectNum";
    span.textContent = sectionNumber;
    heading.prepend(span);

    let anchor = document.createElement("a");
    let fragmentName = `TOC${sectionNumber}`;
    anchor.name = fragmentName;
    heading.before(anchor);
    anchor.append(heading);

    let link = document.createElement("a");
    link.href = `#${fragmentName}`;
    link.innerHTML = heading.innerHTML;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(`a[name="${fragmentName}"]`);
      if (!target) {
        return;
      }
      target.scrollIntoView();
      /* NOTE: scrollTo または scrollIntoView でスムーズにスクロールしなさい  */
    });

    let entry = document.createElement("div");
    entry.classList.add("TOCEntry", `TOCLevel${level}`);
    entry.append(link);
    toc.append(entry);
  }
})();
