"use strict";

// Variables
let todoItems = [];
const todoInput = document.querySelector(".todo-input");
const completedTodosDiv = document.querySelector(".completed-todos");
const uncompletedTodoDiv = document.querySelector(".uncompleted-todos");
const audio = new Audio("sound.wav");

// Get todo list on first boot
window.onload = () => {};

// Get the content typed into the input
todoInput.onkeyup((e) => {});

// Add todo
function addTodo(text) {}

// Remove todo
function removeTodo(id) {}

// Mark as completed
function markAsCompleted(id) {}

// Mark as uncomplted
function markAsUncomplted(id) {}

// Save in localstorage
function save() {}

// Render
function render() {}

// Save and render
function saveAndRender() {
  save();
  render();
}

// Create todo list item
function createTodoElement(todo) {}
