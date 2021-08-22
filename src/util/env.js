const HOGE = process.env.HOGE;
const FUGA = process.env.FUGA;

if (HOGE === undefined || FUGA === undefined) {
  throw new Error("環境変数がたりません。");
}

export const getHOGE = () => {
  return HOGE;
};

export const getFUGA = () => {
  return FUGA;
};
