const apiUrl = "/api/tasks";

async function fetchTasks() {
    const res = await fetch(apiUrl);
    const tasks = await res.json();
    renderTasks(tasks);
}

document.getElementById("taskForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const task = {
        title: document.getElementById("title").value,
        assignedTo: document.getElementById("assignedTo").value,
        priority: document.getElementById("priority").value,
        details: document.getElementById("details").value,
        status: "Pending"
    };

    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    });

    e.target.reset();
    fetchTasks();
});

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchTasks();
}

async function toggleStatus(id, currentStatus) {
    const res = await fetch(`${apiUrl}`);
    let tasks = await res.json();
    let task = tasks.find(t => t.id === id);

    if (task) {
        task.status = currentStatus === "Completed" ? "Pending" : "Completed";
        task.dateOfCompletion = task.status === "Completed" ? new Date() : null;

        await fetch(`${apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });
        fetchTasks();
    }
}

function renderTasks(tasks) {
    const tbody = document.querySelector("#taskTable tbody");
    tbody.innerHTML = "";
    tasks.forEach(task => {
        tbody.innerHTML += `
            <tr>
                <td>${task.title}</td>
                <td>${task.assignedTo}</td>
                <td>${task.priority}</td>
                <td>${task.status}</td>
                <td>${new Date(task.dateStarted).toLocaleDateString()}</td>
                <td>${task.dateOfCompletion ? new Date(task.dateOfCompletion).toLocaleDateString() : "-"}</td>
                <td>
                    <button onclick="toggleStatus(${task.id}, '${task.status}')">
                        ${task.status === "Completed" ? "Undo" : "Complete"}
                    </button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

async function exportTasks() {
    window.location.href = `${apiUrl}/export`;
}

async function importTasks(event) {
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    const importedTasks = JSON.parse(text);

    await fetch(`${apiUrl}/import`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importedTasks)
    });

    fetchTasks();
}

fetchTasks();
