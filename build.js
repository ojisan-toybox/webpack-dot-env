(()=>{"use strict";const o=process.env.HOGE,e=process.env.FUGA;if(void 0===o||void 0===e)throw new Error("環境変数がたりません。");const n=o,r=e,t=document.getElementById("root");if(null===t)throw new Error("not found el");console.log(t),t.innerText=`hoge: ${n}, fuga: ${r}`})();