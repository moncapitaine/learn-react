import dynamic from "next/dynamic"

const ToDosNoSSR = dynamic(() => import('../components/ToDoList'), { ssr: false })

export default ToDosNoSSR