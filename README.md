# URL Shortener 短網址產生器

## 介紹

將長長的網址縮成短短的「短網址產生器」

- HOME 畫面
![image](https://github.com/AZH0823/ShortURL_Generator_A8/blob/master/public/img/index.jpg)

- Finsh 畫面
![image](https://github.com/AZH0823/ShortURL_Generator_A8/blob/master/public/img/Finsh.jpg)

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start  一般運行
   npm run dev    開發者模式
   ```

5. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3100
   ```
6. Create seed 建立種子資料

   ```bash
   npm run seed 
   新增一筆Google.com.tw 至 DB
   ```


7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.2
- Express-Handlebars 4.0.2
- MongoDB
- mongoose 6.1.2
- nodemon 2.0.15
