import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col md:flex-row gap-8">
            {/* post pertama */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                {/* gambar */}
                <Image src="featured1.jpeg" className='rounded-3xl object-cover' w="895" />
                {/* detail */}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold md:text-lg">01.</h1>
                    <Link className="text-blue-800 md:text-lg">Event di Prabumulih</Link>
                    <span className="text-gray-500">2 hari lalu</span>
                </div>
                {/* judul */}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Festival Kuliner Prabumulih: Makanan Khas yang Wajib Dicoba!
                </Link>
            </div>
            {/* post lainnya */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
                {/* post kedua */}
                <div className="h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image
                            src="featured2.jpeg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    {/* detail dan judul */}
                    <div className="w-2/3">
                        {/* detail */}
                        <div className="flex items-center gap-4 text-xs lg:text-sm mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-blue-800">Tempat Wisata di Prabumulih</Link>
                            <span className="text-gray-500 text-sm">3 hari lalu</span>
                        </div>
                        {/* judul */}
                        <Link to="/test" className="font-medium text-sm lg:text-xl">
                            Menikmati Keindahan Alam Danau Air Hitam Prabumulih
                        </Link>
                    </div>
                </div>
                {/* post ketiga */}
                <div className="h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image
                            src="featured3.jpeg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    {/* detail dan judul */}
                    <div className="w-2/3">
                        {/* detail */}
                        <div className="flex items-center gap-4 text-xs lg:text-sm mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link className="text-blue-800">Info Lokal Prabumulih</Link>
                            <span className="text-gray-500 text-sm">5 hari lalu</span>
                        </div>
                        {/* judul */}
                        <Link to="/test" className="font-medium text-sm lg:text-xl">
                            Mengenal Tradisi dan Budaya Unik di Prabumulih
                        </Link>
                    </div>
                </div>
                {/* post keempat */}
                <div className="h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image
                            src="denun.jpg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    {/* detail dan judul */}
                    <div className="w-2/3">
                        {/* detail */}
                        <div className="flex items-center gap-4 text-xs lg:text-sm mb-4">
                            <h1 className="font-semibold">04.</h1>
                            <Link className="text-blue-800">Kuliner Prabumulih</Link>
                            <span className="text-gray-500 text-sm">6 hari lalu</span>
                        </div>
                        {/* judul */}
                        <Link to="/test" className="font-medium text-sm lg:text-xl">
                            5 Tempat Makan Khas Prabumulih yang Harus Kamu Coba
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPosts;
