const init = {
    todos: [{
            title: "hocj javascript",
            completed: false,
        },
        {
            title: "hocj HTML ,CSS",
            completed: true,
        },
    ]
}

const actions = {
    add({
        todos
    }, title) {
        todos.push({
            title,
            completed: false
        })
    }
}
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}