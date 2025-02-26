import Comment from "./Comment"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 md:-3/5 mt-4">
        <h1 className="underline text-lg text-gray-500">Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea placeholder="Write a comment..." className="w-full p-4 rounded-xl"/>
            <button className="bg-blue-800 px-4 py-3 font-medium text-white rounded-xl">Send</button>
        </div>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>
  )
}

export default Comments