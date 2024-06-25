# Todo App

![image](https://github.com/yjain0418/to-do-list/assets/123239857/0946d0ab-9382-4961-9b44-a29641f9f675)

## Overview
The Todo App is a simple web application that allows users to manage their tasks. Users can create new tasks, update existing ones, and delete tasks they no longer need. The application is built using Node.js, Express, and MongoDB.

## Features
1. Create Task: Add a new task to the list.
2. Update Task: Modify the details of an existing task.
3. Delete Task: Remove a task from the list.

## Prerequisites
1. Node.js
2. MongoDB
3. npm

## Installation
1. Clone the repository:
```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```
2. Install dependencies:

```
npm install
```

3. Set up MongoDB:
+ Ensure MongoDB is installed and running.
+ Create a MongoDB database and collection for the tasks.
+ Update the MongoDB connection string in app.js or use environment variables to configure it.

4. Start the server:

```
node app.js
```

5. Open your browser and navigate to:

```
http://localhost:3000
```

## Usage
### Create a Task
1. Enter the task details in the input field.
2. Click the "Add Task" button to create a new task.
### Update a Task
1. Click the "Update" button next to the task you want to update.
2. Enter the new task details in the prompt.
3. Confirm to update the task.
### Delete a Task
1. Click the "Delete" button next to the task you want to delete.
2. Confirm to remove the task from the list.
