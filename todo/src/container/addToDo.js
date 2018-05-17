let addToDo = ({ onSubmit}) => {
    let input
    return {
        <div>
        <form onSubmit = { event => { onSubmit(input.value)}}>
        <input ref = {node => {input = node}} />
        <button type  = "submit"> Add Todo </button>
        </form>
        </div>
    }
}

export default addToDo