// object inside array

const blockList = [
  { userName: "john", reason: "Abusive Content" },
  { userName: "rahul", reason: "copyright issue" },
];

console.log(blockList);

for (let i = 0; i < blockList.length; i++) {
  console.log(
    `user ${blockList[i].userName} is blocked due to ${blockList[i].reason}`
  );
}
