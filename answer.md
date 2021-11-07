![](https://i.imgur.com/0UCZ35Z.jpg)

#### 1. 此為畫面產出的流程，有不同的讀取及呈現的時間，一開始如果白頁(FP) 約 2-3 秒後才會產生畫面，請問有什麼方式可以進行確認瓶頸？以及有何方式解決？

通常網頁資源的載入順序是：html 檔 -> css, js 檔 -> 其他資源。
當 css, js 檔載入過慢，會阻塞畫面渲染，延遲 First Paint 發生的時間。

確認瓶頸的方式：
使用 Chrome 開發者工具，可以檢測 First Paint 發生時間，並確認 css, js 檔載入時間。

![](https://i.imgur.com/pgc8CH1.png)

步驟：
1. 打開無痕分頁 -> 打開 DevTools的「網路」勾選禁用 Cache
2. 打開 Devtools 的「效能」勾選 Web Vitals（網頁效能指標），按下重新紀錄，即可獲得 FP 和資源傳輸的時間。

可能的解決方式：
1. 壓縮 html, css, js，並合併 css, js 檔，減少 request 數量。
1. 使用 CDN
1. 延遲載入不重要的 css 和 js 檔，防止他們阻塞渲染

```html
<!-- 延遲載入 script 的語法 -->
<script defer src="https://path/to/file/script.js"。></script>

<!-- 延遲載入 css 的語法 -->
<link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">
 <!-- 如果 JS 被禁用，使用 fallback 語法載入 CSS -->
 <noscript><link rel="stylesheet" href="style.css"></noscript>
```

---

#### 2. 如果為第一頁白頁，到 FP 的時間很久，可能是在那邊產生問題？瀏覽器？後端？網路？請嘗試說明可能性

1. 資源傳輸慢（後端）：原因可能為後端回應時間過久，或hosting 主機的位置遠或效率差。
2. css, js 檔案數量多，阻塞渲染

#### 3. 當頁面進入到 FMP 時，需要進入到最後一個完整畫面，我們會盡量避免畫面跳動，此時可以使用哪些模組？或者哪些技巧讓載入狀況較為順暢，請試著舉例。

可以使用 lazyLoad 讓圖檔延遲載入。為了防止畫面跳動，可在圖的位置放一個預設圖或模糊圖，當DOM Loaded 事件觸發後，在載入真正要顯示的圖片。

相關套件：
[LazyLoad (Vanilla JS)](https://github.com/verlok/vanilla-lazyload)
[Vue-LazyLoad 套件](https://codingnote.cc/zh-tw/p/9125/)

#### 4. 請試著透過 HTML / CSS (SASS / SCSS) 製作出如下圖的 HTML 頁面，請注意底下備註
![image](https://user-images.githubusercontent.com/87496004/128321905-a791e90e-afd2-46b1-9256-eb00f43a33be.png)

- 答案請見 index.html
- SCSS 原始碼：src/scss/base.scss (使用 webpack 編譯)

```
#  啟動 webpack 編譯
$ yarn install
$ yarn build
```

#### 5. 請試著改寫以下 function ，並且可以如下 Expect 方式取得回傳值

答案請見 src/base.js

Expect and return
```javascript
const sum = add(3)(2);
// sum = 5
console.log(sum);
```

```javascript
function add () {
  // TODO: need to implement
}
```