"use strict";


// 書籍オブジェクトを格納
const myLibrary = [];


// 書籍用コンストラクター
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // 引数を受け取り, 書籍オブジェクトを作成し
  const book = new Book(title, author, pages, read);
  // crypto.randomUUID()でid
  // 配列に書籍オブジェクトを保存
  myLibrary.push(book);
}


function displayBookToLibrary() {
  // 配列をループ処理し、書籍をページ上に表示する関数
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
console.log(myLibrary);
