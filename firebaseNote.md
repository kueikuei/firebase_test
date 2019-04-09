### 雲端 firebase 環境設定
- Firebase/Database

    - 起手式與設定

    ```javascript
    // 前端部分
    <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js">
    </script>

    // 後端部分
    var firebase = require("firebase")

    // 可以開始使用 全域變數 `firebase`

    // config 設定檔
    var config = {
        apiKey: ,
        authDomain: ,
        databaseURL: ,
        projectId:,
        storageBucket: ,
        messagingSenderId:
    };

    // init firebase app
    firebase.initializeApp(config)

    //
    ```

    - 規則
        - 方便測試先開啟所有權限
    ```js
    {
        "rules": {
            ".read": true,
            ".write": true
        }
    }
    ```
    此時便可以寫入資料或是讀取資料


Express 架構 web serice

Firebase
ref 尋找資料庫路徑
set 新增資料語法
firebase.database().ref().set()
Error:Permission Deny
