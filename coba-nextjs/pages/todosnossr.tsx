import dynamic from "next/dynamic"

// Higher order component
const ToDosNoSSR = dynamic(() => import('../components/ToDoList'), { ssr: false })

export default ToDosNoSSR