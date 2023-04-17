export default function withLogger(reduce) {
    return (prevState, action, args) => {
        console.group(action)
        const nextState = reduce(prevState, action, args)
        console.groupEnd()
        return nextState
    }

}