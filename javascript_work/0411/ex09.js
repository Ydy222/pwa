function doA({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? "완료" : "미완료"} 입니다`);
}

const todo = { id: 1, content: "HTML", completed: false };
doA(todo);
