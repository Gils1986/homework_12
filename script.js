let articles = [
  {
    id: 1,
    title: "hello world",
  },
  {
    id: 2,
    title: "goodbye world",
  },
  {
    id: 3,
    title: "hello planet",
  },
  {
    id: 4,
    title: "hi there",
  },
];

let comments = [
  {
    commentId: 1,
    content: "unbailable",
    articleId: 2,
  },
  {
    commentId: 2,
    content: "amazing",
    articleId: 4,
  },
  {
    commentId: 3,
    content: "wonderfully",
    articleId: 3,
  },
  {
    commentId: 4,
    content: "wooooooowww",
    articleId: 1,
  },
];

function printToDiv(data) {
  //אפשר לעשות 2 פרמטרים?
  data[0].forEach((element) => {
    data[1].forEach((el) => {
      if (element.id === el.articleId) {
        let firstDiv = document.createElement("div");
        let newPar = document.createElement("p");
        let newElement = document.createTextNode(
          `This is comment number ${element.id} for article number ${el.articleId} and the comment is ${el.content}`
        ); //איך אפשר לגשת לכל האובייקט?

        newPar.appendChild(newElement);
        firstDiv.appendChild(newPar);
        document.body.appendChild(firstDiv);
      }
    });   
  });
}

let promise1 = new Promise((resolve) => {
  resolve(articles);
});
function loadE(articles) {
  //לא מיותר? אפשר לעשות את הריטורן הזה למעלה
  return new Promise((resolve) => {
    resolve([articles, comments]); //מתייחס בתור מערך עם 2 איברים?
  });
}
promise1.then(loadE).then(printToDiv);

// let story = [
//   {
//     id: "1",
//     title:
//       "'Don't read the comments : misinformed and malicious comments stifle Indigenous voices",
//   },
//   {
//     id: "2",
//     title: "Australia: How 'bin chickens' learnt to wash poisonous cane toads",
//   },
//   {
//     id: "3",
//     title:
//       "Online anonymity: study found 'stable pseudonyms' created a more civil environment than real user names",
//   },
// ];
// let comments = [
//   {
//     id: "1",
//     content:
//       "A subtle form of trolling involving  bad- faith questions. You disingenuously frame your conversation as a sincere request to be enlightened, placing the burden of educating you entirely on the other party. If your bait is successful, the other party may engage, painstakingly laying out their logic and evidence in the false hope of helping someone learn.",
//     story_id: "1",
//   },
//   {
//     id: "2",
//     content: "interesting",
//     story_id: "3",
//   },
//   {
//     id: "3",
//     content: "I will read it later",
//     story_id: "3",
//   },
//   {
//     id: "4",
//     content: "I like to read",
//     story_id: "1",
//   },
// ];

// let data = [];
// let promise1 = new Promise((resolve) => {
//   resolve(comments);
// });
// let promise2 = new Promise((resolve) => {
//   resolve(story);
// });

// function displayStory(newArray) {
//   data.push(story);
//   return newArray;
// }
// function displayComment(data) {
//   data.forEach((element) => {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("title");
//     document.body.appendChild(newDiv);
//     let title = document.createElement("h2");
//     let newContentTitle = document.createTextNode(element.title);
//     title.appendChild(newContentTitle);
//     newDiv.appendChild(title);
//     comments.forEach((elementX) => {
//       if (elementX.story_id === element.id) {
//         let newPar = document.createElement("p");
//         let newContent = document.createTextNode(
//           "Comment: " + elementX.content
//         );
//         newPar.appendChild(newContent);
//         newDiv.appendChild(newPar);
//       }
//     });
//   });
// }
// promise1.then(displayStory).then(promise2.then(displayComment));

/C/Users/Nava/Desktop/homework_12
