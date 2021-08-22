import { getHOGE, getFUGA } from "./util/env";

const hoge = getHOGE();
const fuga = getFUGA();

const rootEl = document.getElementById("root");

if (rootEl === null) {
  throw new Error("not found el");
}

console.log(rootEl);

rootEl.innerText = `hoge: ${hoge}, fuga: ${fuga}`;
