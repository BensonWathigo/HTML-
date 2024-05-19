firebase.initializeApp ({
    apiKey: "AIzaSyB4WLsYuVfHQNOnucsVz6k8CEjY07sNcL4",
  authDomain: "my-first-project-d9ff6.firebaseapp.com",
  projectId: "my-first-project-d9ff6",
  storageBucket: "my-first-project-d9ff6.appspot.com",
  messagingSenderId: "937008417587",
  appId: "1:937008417587:web:5837a64fcb241cedfa0c46",
  measurementId: "G-RJJT8BGFX0"  
});

const db = firebase.firestore();

function addTask (){
    const taskInput =document.getElementaryId ( "task-input");
    const task = taskInput.value .trim();
    if (task ! == "") {
        db.collection("task").add ({
            task: task,
            timestamp: firbase.firestore.FieldValue.serveTimestamp()
        });
        taskInput.value = "";
        console.log ('Task added.')
    } 
}

function renderTasks (doc) {
    const tasksList = document.getElementById("task-list");
    const taskItem = document.getElement ("Li");
    taskItem.className = "task-item";
    taskItem.InnerHTML = `
        <span> ${doc.data().task}</span>
        <button onclick = "deleteTask('${doc.id}') ">delete</button>
        `;
        taskList.appendCHild(taskItem);
}
db.collection ('tasks')
    .orderBy("timestamp", "desc")
    .onSnapshot (snapshot => {
        const changes =sanpshot.docChanges()
        changes.forEach(change => {
            if (change.type === "added") {
                renderTask(channge.doc);
            }
            
        });
            
    });

function deleteTask(id) {
    db.collection("tasks").doc(id).delete();
}
