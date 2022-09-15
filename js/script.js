console.log('JS OK')

const app = new Vue(
    {
        el: '#app',
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Fare la lavatrice',
                    done: false,
                },
                {
                    text: 'Portare a spasso il cane',
                    done: true,
                },
                {
                    text: 'Preparare la cena',
                    done: false,
                },
                {
                    text: 'Fare il bucato',
                    done: true,
                },
            ]
        },
        methods: {
            deleteTodo(index) {
                const array = [];
                for (let i = 0; i < this.todos.length; i++) {
                    if (i !== index) {
                        array.push(this.todos[i])
                    }
                }
                this.todos = array;
            },
            addTodo() {
                const toDoToInsert = {
                    text: this.newTodo.trim(),
                    done: false,
                }
                if (toDoToInsert) {
                    this.todos.push(toDoToInsert);

                } else {
                    console.log('non hai inserito nulla')

                }
                console.log(this.todos)
                this.newTodo = '';
            },
            //BONUS-2
            changeTodo(i){
                this.todos[i].done = !this.todos[i].done
            }
        }
    }
)