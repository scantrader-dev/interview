
# Quick Interview


![](https://i.imgur.com/0UCZ35Z.jpg)


1. 此為畫面產出的流程，有不同的讀取及呈現的時間，一開始如果白頁(FP) 約 2-3 秒後才會產生畫面，請問有什麼方式可以進行確認瓶頸？以及有何方式解決？

  - 透過 devtool 看一下 network pannel 裡面的 request 請求時間，因為可能是 response 還沒回來，導致畫面未能順利 render 所有內容。
  - 若 network 都有順利拿到資料，卻還未能 reder 成功，看看 console 報什麼錯誤。並依錯誤報告去修改 bug。
  - 若以上方式還找不出原因，就用 devtool source pannel 的 debug 去跑跑看 runtime 會停在哪裡，再去 source code 找問題。

2. 如果為第一頁白頁，到 FP 的時間很久，可能是在那邊產生問題？瀏覽器？後端？網路？請嘗試說明可能性
  - 因為空白頁到 FP 的過程只有畫面上方的黑色漸層色塊被渲染，所以會先去檢查這個渲染的樣式是怎麼寫的，如果是因為透過圖片（黑色區塊中間的 google logo），就檢查這張圖片是不是過大，可以壓縮讓網頁的效能比較好。
  - 如果不是上述的問題，一樣檢查有沒有其它請求時間過長的 request，因為太慢拿到資源，導致畫面 render 速度很慢。

3. 當頁面進入到 FMP 時，需要進入到最後一個完整畫面，我們會盡量避免畫面跳動，此時可以使用哪些模組？或者哪些技巧讓載入狀況較為順暢，請試著舉例。
  ![](https://i.imgur.com/qKe5Ly0l.png)
  
  - 會將紅色處包獨立的 template，用 JS 寫一支 render function 接個別 圖片 跟 影片 的 response 回來，然後只 render 此兩處 template，就不需要重新 render 整個頁面。
  如果是用框架開發，它們本身的 render 機制就會只去 render 資料有改動的地方。

4. 請試著透過 HTML / CSS (SASS / SCSS) 製作出如下圖的 HTML 頁面，請注意底下備註

```
4-1 整體寬度為 100%
4-2 Right-panel 寬度為 30%, Content 寬度為 70%
4-3 Content 最小高度為 2 個螢幕高度
4-4 Header 為 sticky 會隨著滾動持續在最頂端
```

![image](https://user-images.githubusercontent.com/87496004/128321905-a791e90e-afd2-46b1-9256-eb00f43a33be.png)

[請看成果](https://web-platform-ele7od.stackblitz.io)
[請看 code](https://stackblitz.com/edit/web-platform-ele7od?file=index.html)

5. 請試著改寫以下 function ，並且可以如下 Expect 方式取得回傳值

Expect and return
```
const sum = add(3)(2);
// sum = 5
console.log(sum);
```

```
function add (firstInt) {
  function sum(secondInt) {
    return firstInt + secondInt;
  }
  return sum;
}
```
