import {Link} from "react-router-dom"
import MainCategories from "../components/MainCategories"
import Icon from '@mdi/react';
import {mdiArrowTopRight} from '@mdi/js';
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4 mb-10">
            {/* Breadcrumb */}
            <div className="flex gap-3">
                <Link to='/'>Beranda</Link>
                <span>•</span>
                <span className="text-blue-700">Berita dan Artikel Prabumulih</span>
            </div>
            {/* Introduction */}
            <div className="flex items-center justify-between gap-16">
                {/* Judul */}
                <div className="">
                    <h1 className="text-gray-800 font-bold text-2xl md:text-4xl">Berita Terbaru Seputar Kota Prabumulih!</h1>
                    <p className="mt-6 text-md md:text-xl">Dapatkan informasi terkini tentang
                        kejadian, acara, dan berita populer di kota Prabumulih. Kami menyajikan artikel
                        yang mendalam serta berita terpercaya untuk Anda.</p>
                </div>
                {/* tombol animasi */}
                <Link to='/write' className="relative hidden md:block">
                    <svg
                        viewBox="0 0 200 200"
                        width='180'
                        height='180'
                        className="text-lg tracking-widest animate-spin animatedButton">
                        <path
                            id="circlePath"
                            fill="none"
                            d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"/>
                        <text>
                            <textPath href="#circlePath" startOffset='0%'>
                                Write Your Story •
                            </textPath>
                            <textPath href="#circlePath" startOffset='50%'>
                                Share Your Idea •
                            </textPath>
                        </text>
                    </svg>
                    <button
                        className="bg-blue-800 absolute left-0 top-0 bottom-0 right-0 m-auto w-16 h-16  rounded-full flex items-center justify-center">
                        <Icon path={mdiArrowTopRight} size={2} color="white"/>
                    </button>
                </Link>
            </div>
            {/* Categories */}
            <MainCategories/> {/* Feature Posts */}
            <FeaturedPosts/> {/* Post List */}
            <div className="my-8 mt-20 ">
                <h1 className="text-gray-600 text-2xl underline underline-offset-4 mb-8">Postingan Terbaru Terkait Prabumulih</h1>
                <PostList/>
            </div>
        </div>
    )
}

export default HomePage