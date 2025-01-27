import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
    return (
        <div className="flex flex-col gap-6 h-max md:sticky top-8 ">
            <div>
                <h1 className="mb-2 text-sm font-medium">Pencarian</h1>
                <Search />
            </div>
            <div>
                <h1 className="mb-2 text-sm font-medium">Filter</h1>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="flex items-center gap-1 text-sm">
                        <input type="checkbox" name="sort" value="newest" className="w-4 h-4" />
                        Terbaru
                    </label>
                    <label htmlFor="" className="flex items-center gap-1 text-sm">
                        <input type="checkbox" name="sort" value="popular" className="w-4 h-4" />
                        Paling Populer
                    </label>
                    <label htmlFor="" className="flex items-center gap-1 text-sm">
                        <input type="checkbox" name="sort" value="trending" className="w-4 h-4" />
                        Trending
                    </label>
                    <label htmlFor="" className="flex items-center gap-1 text-sm">
                        <input type="checkbox" name="sort" value="oldest" className="w-4 h-4" />
                        Terlama
                    </label>
                </div>
            </div>
            <div>
                <h1 className="mb-2 text-sm font-medium">Kategori</h1>
                <div className="flex flex-col gap-2 underline text-sm">
                    <Link className="" to="/posts">Semua</Link>
                    <Link className="" to="/posts?cat=event">Event</Link>
                    <Link className="" to="/posts?cat=wisata">Wisata</Link>
                    <Link className="" to="/posts?cat=kuliner">Kuliner</Link>
                    <Link className="" to="/posts?cat=budaya">Budaya</Link>
                    <Link className="" to="/posts?cat=berita">Berita</Link>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
