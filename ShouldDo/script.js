'use strict';

//날짜
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

document.getElementById('dateIND').innerHTML = `${year}년 ${month}월 ${day}일`;

//todolist

let listCount = 0;



document.getElementById('addBtn').onclick = function addList() {
  let newList = document.createElement("li");
  listCount = listCount + 1;
  newList.innerHTML = `${listCount}번째 리스트입니다`;
  newList.setAttribute("class", "list");

  document.getElementById('toDoList').appendChild(newList);
}
