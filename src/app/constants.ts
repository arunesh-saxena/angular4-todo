// import { Injectable } from '@angular/core';
//  @Injectable()

// export class appConfig {
//     CONSTANTS = {
//         key:'value'
//         key:'value'
//     }
// }
const baseURL = 'http://localhost:3000/api';
export const CONSTANTS = {
    baseURL: 'http://localhost:3000',
    serviceUrl: '',
    msg: {
        ERROR: 'Error',
        INFO: 'Info',
        SUCCESS: 'Success',
        WARNING: 'Warning'
    },
    message: {
        internalServerError: 'Oops! Sorry, it looks like something went wrong and an error has occurred on server.'
    },
    templateUrls: {
        // Common
        header: 'common/components/header/header.tpl.html',
    },
    api: {
        todoList: `${baseURL}/getTodolist`,
        addTodoList: `${baseURL}/addTodo`,
        updateTodo: `${baseURL}/updateTodo`,
        // deleteTodo:`${baseURL}/deleteTodo/:id`
        deleteTodo: `${baseURL}/deleteTodo/`,
        registerUser: `${baseURL}/singup`,
        login: `${baseURL}/login`,
        logout: `${baseURL}/logout`

    },
    getApi(term) {
        return `${this.baseURL}${this.api['todoLiist']}`;
    }
}
