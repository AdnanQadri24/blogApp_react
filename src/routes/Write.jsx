import {useUser} from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { Link } from "react-router-dom";

const Write = () => {
    const {isLoaded, isSignedIn} = useUser();

    if (!isLoaded) {
        return <div className="">Loading...</div>
    }

    if (!isSignedIn) {
        return <div className="">You Should Login !</div>
    }

    return (
        <div
            className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-4">
            {/* ilmu baru: 100vh adalah ukuran layar */}
            <h1 className="text-xl font-medium">Create New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button
                    className="w-max bg-white p-2 rounded-xl text-sm font-medium text-gray-400">Add a cover image</button>
                <input
                    className="text-2xl font-semibold outline-none bg-transparent"
                    type="text"
                    placeholder="My Awesome Story"/>
                <div className="flex items-center gap-4">
                    <label className="text-sm" htmlFor="">Chose a category:</label>
                    <select className="p-2 rounded-xl bg-white shadow-md" name="cat" id="">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea
                    className="p-4 rounded-xl shadow-md text-sm outline-none"
                    name="desc"
                    placeholder="A Short Description"/>
                <ReactQuill className="mb-8 flex-1 bg-white rounded-xl shadow-md" theme="snow"/>
                <Link to="/">
                    <button className="bg-blue-800 text-white font-medium w-28 py-1 rounded-xl ">Send</button>
                </Link>
            </form>
        </div>
    )
}

export default Write