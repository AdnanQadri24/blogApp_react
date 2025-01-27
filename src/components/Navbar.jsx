import {useState} from "react";
import Image from "./Image";
import {Link} from "react-router-dom";
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false); // Menutup menu
    }

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* logo */}
            <Link to='/' className="flex items-center gap-4 text-2xl font-bold ">
                <Image src="logo.png" alt="adnan logo" w={32} h={32}/>
                <span>InfoPrabu</span>
            </Link>
            {/* Mobile app */}
            <div className="md:hidden">
                {/* mobile button */}
                <div className="flex gap-2">
                    <SignedIn className="">
                        <UserButton/>
                    </SignedIn>
                    <div
                        className="cursor-pointer text-4xl mx-2"
                        onClick={() => setOpen((prev) => !prev)}>{
                            open
                                ? <span className="text-3xl">X</span>
                                : <span>≡</span>
                        }
                    </div>
                </div>
                {/* mobile link list */}
                <div
                    className={`w-full bg-[#e6e6ff] h-screen flex flex-col items-center gap-4 font-medium text-lg justify-center absolute transition-all ease-in-out ${open
                        ? "block -right-0"
                        : "hidden"}`}>
                    <Link to='/' onClick={handleLinkClick}>Beranda</Link>
                    <Link to='/posts' onClick={handleLinkClick}>Trending Prabu</Link>
                    <Link to='/posts' onClick={handleLinkClick}>Terpopuler</Link>
                    <Link to='/write' onClick={handleLinkClick}>Ceritakan Pengalaman</Link>
                    <SignedOut>
                        <Link to='/login'>
                            <button className="bg-blue-600 py-2 px-4 rounded-full text-white">
                                Masuk 👋
                            </button>
                        </Link>
                    </SignedOut>
                </div>
            </div>
            {/* Dekstop Menu */}
            <div className="hidden md:flex items-center 4xl:gap-12 gap-8 font-medium">
                <Link to='/'>Beranda</Link>
                <Link to='/posts'>Trending Prabu</Link>
                <Link to='/posts'>Terpopuler</Link>
                <Link to='/write'>Ceritakan Pengalaman</Link>
                <SignedOut>
                    <Link to='/login'>
                        <button
                            className="bg-blue-600 py-2 px-4 rounded-full text-white hover:bg-blue-500">
                            Masuk 👋
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar;
