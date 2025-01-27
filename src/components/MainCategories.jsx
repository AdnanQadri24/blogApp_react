import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const MainCategories = () => {
    return (
        <div
            className="hidden md:flex bg-white rounded-3xl items-center justify-center shadow-xl p-4 gap-6">
            {/* links */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link
                    to="/posts"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full ">Semua Tentang Prabumulih</Link>
                <Link
                    to="/posts?cat=event-prabumulih"
                    className="hover:bg-blue-50 px-4 py-2 rounded-full">Event</Link>
                <Link
                    to="/posts?cat=wisata-prabumulih"
                    className="hover:bg-blue-50 px-4 py-2 rounded-full">Wisata</Link>
                <Link
                    to="/posts?cat=kuliner-prabumulih"
                    className="hover:bg-blue-50 px-4 py-2 rounded-full">Kuliner</Link>
                <Link
                    to="/posts?cat=budaya-prabumulih"
                    className="hover:bg-blue-50 px-4 py-2 rounded-full">Budaya</Link>
                <Link
                    to="/posts?cat=berita-prabumulih"
                    className="hover:bg-blue-50 px-4 py-2 rounded-full">Berita</Link>
            </div>
            <span className="text-xl font-medium">|</span>
            {/* Search  */}
            <div
                className="bg-gray-200 p-2 rounded-full flex items-start justify-center gap-2">
                <Icon path={mdiMagnify} size={1} color="gray" className="opacity-50"/>
                <input
                    type="text"
                    placeholder="Cari..."
                    className="bg-transparent outline-none"/>
            </div>
        </div>
    )
}

export default MainCategories;
