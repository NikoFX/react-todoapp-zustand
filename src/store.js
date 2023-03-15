import { create } from 'zustand'

export const store = create((set) => ({
    toDoList: [],
    deletedList: [],
    setToDoList: (p) => set(state => ({ toDoList: p })),
    addToDo: (p) => set(state => {
        let unicId = ((state.toDoList.at(-1)?.id ?? 0) + 1)
        state.toDoList.push({
            id: unicId,
            toDo: p,
            isDone: false
        })
        return {}
    }),
    deleteToDo: (id) => set(state => {
        let newList = state.toDoList.filter(t => {
            if (t.id === Number(id)) {
                let unicId = ((state.deletedList.at(-1)?.id ?? 0) + 1)
                state.deletedList.push({
                    id: unicId,
                    toDo: t.toDo,
                    isDone: t.isDone
                })
            }
            return t.id !== Number(id)
        })
        return { toDoList: newList }
    }),
    markToDo: (id) => set(state => {
        state.toDoList = state.toDoList.map(t => {
            t.id === Number(id) ? t.isDone = !t.isDone : null
            return t
        })
        return {}
    }),
    restoreToDo: (id) => set(state => {
        state.deletedList = state.deletedList.filter(t => {
            if (t.id === Number(id)) {
                // add todo again
                let unicId = ((state.toDoList.at(-1)?.id ?? 0) + 1)
                state.toDoList.push({
                    id: unicId,
                    toDo: t.toDo,
                    isDone: t.isDone
                })
            }
            return t.id !== Number(id)
        })
        return {}
    })
}))
