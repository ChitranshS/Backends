import { atom, selector } from "recoil";
 export const todosAtom = atom({
    key: 'todosAtom',
    default: [{todo:"", desc:""}]
});
 export const filterAtom = atom({
    key: 'filterAtom',
    default: "filter"
})
 export const filterTodos = selector({
    key: 'filterTodos',
    get:(props)=>{
        const filter = props.get(filterAtom)
        const todos = props.get(todosAtom)
        return todos.filter((todo)=>todo.todo.includes(filter))
    }
 })
