import {useState} from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"

const PostListPage = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="">
            <h1 className="text-xl md:text-2xl mb-8 font-medium">Development Blog</h1>
            <button
                onClick={() => setOpen((prev => !prev))}
                className="bg-blue-800 text-white text-sm rounded-xl p-2 px-4 md:hidden">{
                    open
                        ? "Close"
                        : "Filter or search"
                }</button>
            <div className="flex flex-col-reverse md:flex-row gap-12">
                <div className="md:w-4/5">
                    <PostList/>
                </div>
                <div className={`${open ? "block" : "hidden"} md:block md:w-1/5`}>
                    <SideMenu/>
                </div>
            </div>
        </div>
    )
}

export default PostListPage