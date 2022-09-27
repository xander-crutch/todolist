import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Todo } from './Todo';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'To Do List';
	todos: Todo[] = [];
	newTodo: string;
	empty: boolean;
	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
	}
	saveTodo() {
		if (this.newTodo) {
			let todo = new Todo();
			todo.timetodo = Date().toLocaleString();
			todo.name = this.newTodo;
			todo.isCompleted = true;
			this.todos.push(todo);
			this.newTodo = '';
		} else {
			this.empty = true;
		}
	}
	done(id: number) {
		this.todos[id].isCompleted = !this.todos[id].isCompleted;
	}
	destroy(id: number) {
		this.todos = this.todos.filter((v, i) => i !== id);
	}
}
