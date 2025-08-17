<img width="1901" height="857" alt="TodoApp" src="https://github.com/user-attachments/assets/a4f40471-93de-4057-b26b-d0483a68104e" />

# To-Do List Web Application

A simple **To-Do List Web App** built with 
**ASP.NET Core Web API**
**C#**
**JavaScript**
**HTML** and 
**CSS**

This project demonstrates full CRUD functionality (Create, Read, Update, Delete) for tasks, along with features like:
**marking tasks as completed**
**import/export** and
**basic validations** — all without using a database.  

## 🚀 Features
- Add new tasks with:
  - Title
  - Details
  - Assigned To
  - Priority (Low, Medium, High)
  - Status (Pending, In Progress, Completed)
  - Date Started
  - Date of Completion
- Update and delete tasks
- Mark tasks as completed
- Import/Export tasks as JSON
- User-friendly UI with validation messages
- Backend powered by **ASP.NET Core Web API**
- Frontend served from **wwwroot (HTML, CSS, JS)**

- ## 📂 Project Structure
- TodoApp/
├── Controllers/ # Web API Controllers
│ └── TasksController.cs
├── Models/ # Data models
│ └── TodoTask.cs
├── wwwroot/ # Static frontend (HTML, CSS, JS)
│ ├── index.html
│ ├── style.css
│ └── app.js
├── Program.cs # Entry point
└── README.md

## 🛠️ Tech Stack
- **Backend:** ASP.NET Core Web API (.NET 8)
- **Frontend:** HTML, CSS, JavaScript
- **Serialization:** System.Text.Json
- **Hosting Ready For:** Render

## ▶️ Running Locally

### Prerequisites
- Install [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- Install [Git](https://git-scm.com/) (optional, for cloning)

- ### Steps
```bash
# Clone repo
git clone https://github.com/<your-username>/todoapp.git
cd todoapp

# Restore dependencies
dotnet restore

# Run locally
dotnet run
