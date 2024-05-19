
//Initialize firebase with configuration
firebase.initializeApp ({
    apiKey: "AIzaSyB4WLsYuVfHQNOnucsVz6k8CEjY07sNcL4",
    authDomain: "my-first-project-d9ff6.firebaseapp.com",
    projectId: "my-first-project-d9ff6",
    storageBucket: "my-first-project-d9ff6.appspot.com",
    messagingSenderId: "937008417587",
    appId: "1:937008417587:web:8dc9fa0407abb68afa0c46"
});

const db = firebase.firestore();

//Functions to add to task
function addTask(){
    const taskInput = document.getElementById("tsask-input");
    const task = taskInput.value.trim();

    if (task !== "") {
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then ( ()=> {
            taskInput.value = "";
            console.log("task added");
        }).catch( () => {
            console.error("Error adding tasks: ", error);
        });        
    }
}
//Function to render tasks
function renderTasks(doc) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");

    taskItem.className ="task-item";
    taskItem.innerHTML = `
    <span>${doc.data().task}</span>
    <button onclick = "deleteTask('${doc.id}')">delete</button>
    `;
    taskList.appendChild(taskItem);
}
//real time listeners for tasks
function setupListeners() {
    db.collection("tasks")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type === "added") {
                renderTasks(change.doc);
            }
        });
    });
}
// Function to delete a task
function deleteTask(id) {
    db.collection("tasks").doc(id).delete().then( () => {
        console.log("Task deleted");
    }).catch( error => {
        console.error("Error deleting task", error);
    });
}

// Call set up listeners after initiailzation of the firestore
setupListeners();
