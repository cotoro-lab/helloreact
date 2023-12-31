# Hello React
### React学習用

ハンズオン動画を見ながらReactをゼロから学習するためのリポジトリ

#### #1 (2023/10/30)
* 環境構築
* React起動
* コンポーネントを作成
* propsを利用してボタンの表示テキストを親から子へ渡す
* [【React入門】#5 Props（プロップス）の理解](https://youtu.be/mT6EKxs-ACA?si=UD93Y7gFsR0s2XLg)

#### #2 (2023/11/01)
* stateについての学習
* stateを利用してカウントアップ、ダウンのページ作成
* それに伴い、"react-router-dom"を利用してページ遷移ができるように修正
* 参考：[【React入門】#6 State（ステート）の理解](https://youtu.be/ykiCPXF4bzU?si=2JVrq7QTLIfinU5C)

### #3 （2023/11/05）
* axiosを用いたHTTP通信の実装
* JsonPlaceHolderページを作成してボタン押下でJSONを取得するAPIを呼び出して画面に表示する。
1. apiフォルダにAPIへのリンクを設定
2. ボタンと表示エリアのコンポーネント作成
3. ページソースに非同期でgetする処理を作成
4. getする処理をボタンのonClickイベント時の処理としてpropsで渡す
5. stateを利用して表示エリアコンポーネントに取得データを渡して表示する
* 取得元API：[jsonplaceholder](https://jsonplaceholder.typicode.com)
* 参考：[【React入門】#7 axiosを用いたHTTP通信の実装](https://youtu.be/tPK0nDpnu98?si=LIT2II_PI_UO0bpw)

### ＃４ （2023/11/06）
- pixabayを使用しての画像検索アプリ開発のための下準備
- SearchBarを作成して入力値をコンソール出力するページの作成
- コンポーネント側：入力値が変更した際にその値をstateにて保持、onSubmitでpropsで取得したコンソール表示処理を実行する。
- ページ側：propsにコンソール表示する処理を渡す。

> 参考：[【React入門】#8-1 WebAPIを用いた画像検索アプリ 〜検索フォームの作成〜](https://youtube.com/watch?v=2PdVUO7FitM&list=PLtbitg0evatiDrOncn51ku2mD1LGve-_h&index=8)

### #5 （2023/11/08）
- pixabay APIから画像を取得して表示する処理、コンポーネントの追加
- PixabayPage.tsxの修正

※TypeScriptならAPIから受け取るデータのインターフェースを作成する必要がある。

> 参考：[【React入門】#8-2 WebAPIを用いた画像検索アプリ 〜画像検索機能の作成〜](https://www.youtube.com/watch?v=tclzlcdKUlI&list=PLtbitg0evatiDrOncn51ku2mD1LGve-_h&index=10)

### #6 （2023/11/13）
- react-masonry-componentを利用して画像をレンガ状に配置するように修正
- 配置のスタイル修正
- 検索バーのレイアウト修正

一旦、本学習は完了とする。

> 参考：[【React入門】#8-3 WebAPIを用いた画像検索アプリ 〜スタイルの修正〜](https://www.youtube.com/watch?v=4oawSYbY2Zg&list=PLtbitg0evatiDrOncn51ku2mD1LGve-_h&index=11)


 ### 【完成した画像検索アプリ】
<img width="925" alt="image" src="https://github.com/cotoro-lab/helloreact/assets/76488848/9895cf01-8143-4dc5-bd0e-75d212ba9e6b">


### 【参考】

* [あべちゃんのフロントエンド塾〜Youtube教室〜 React入門](https://youtube.com/playlist?list=PLtbitg0evatiDrOncn51ku2mD1LGve-_h&si=d9Df6X_JHlHAQmgg)
  
