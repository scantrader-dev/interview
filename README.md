
# Quick Interview


![](https://i.imgur.com/0UCZ35Z.jpg)


1. 此為畫面產出的流程，有不同的讀取及呈現的時間，一開始如果白頁(FP) 約 2-3 秒後才會產生畫面，請問有什麼方式可以進行確認瓶頸？以及有何方式解決？
確認瓶頸：
* 使用Chrome DevTools，查看效能表裡的 Timings 
* 檢查請求HTML時，哪個項目所消耗的時間。
![](https://i.imgur.com/wtZccRC.png)

解決方式：
* 網頁結構的調整(字體、版面)
* 檢查字體加載、圖片、SVG或canva資料
* 靜態檔案可以透過 HTTP Header 提供的機制來做快取

2. 如果為第一頁白頁，到 FP 的時間很久，可能是在那邊產生問題？瀏覽器？後端？網路？請嘗試說明可能性
可能是瀏覽器載入的速度過久。因為要編譯或是同時載入的東西過多。

3. 當頁面進入到 FMP 時，需要進入到最後一個完整畫面，我們會盡量避免畫面跳動，此時可以使用哪些模組？或者哪些技巧讓載入狀況較為順暢，請試著舉例。

* 使用HTTP 來緩存重複進入的使用者。
* 壓縮HTML, CSS and JavaScript 的檔案
* 減少重複程式碼的編譯
* 改善鎖定渲染的資源( Render Blocking Resource ），如CSS的載入改善

4. 請試著透過 HTML / CSS (SASS / SCSS) 製作出如下圖的 HTML 頁面，請注意底下備註

* 檔案HTML-page.html

```
4-1 整體寬度為 100%
4-2 Right-panel 寬度為 30%, Content 寬度為 70%
4-3 Content 最小高度為 2 個螢幕高度
4-4 Header 為 sticky 會隨著滾動持續在最頂端
```

![image](https://user-images.githubusercontent.com/87496004/128321905-a791e90e-afd2-46b1-9256-eb00f43a33be.png)

5. 請試著改寫以下 function ，並且可以如下 Expect 方式取得回傳值

Expect and returngit
```
const sum = add(3)(2);
// sum = 5
console.log(sum);
```
* 預設要傳入2個參數
* 當傳入的參數少於1個，會出現undefined
* 故設定傳入y 不是undefined，就使 x與y相加
```
function add (x, y) {
  // TODO: need to implement

  if (y !== undefined) {
    return x + y;
  } else {
    return (y) => x + y;
  }

}
```
