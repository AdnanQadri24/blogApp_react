import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-center gap-8">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
            </div>
            {/* details */}
            <div className="flex flex-col gap-2 xl:w-2/3">
                <Link to='/test' className="text-black text-xl md:text-2xl font-semibold">Mengenal Keindahan Alam Prabumulih, Destinasi Wisata yang Wajib Dikunjungi</Link>
                <div className="flex items-center gap-2 text-sm text-gray-800">
                    <span>Ditulis Oleh</span>
                    <Link className="text-blue-800">Denun Cuy</Link>
                    <span>di</span>
                    <Link className="text-blue-800">Wisata Prabumulih</Link>
                    <span>2 hari yang lalu</span>
                </div>
                <p>Prabumulih menawarkan banyak sekali tempat wisata alam yang menakjubkan. Dari air terjun hingga danau, semuanya siap memanjakan mata. Jangan lewatkan destinasi ini saat berkunjung ke Prabumulih!</p>
                <Link className="mt-2 text-sm underline text-blue-800">Baca selengkapnya</Link>
            </div>
        </div>
    );
};

export default PostListItem;
