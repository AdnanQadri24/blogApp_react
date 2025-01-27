import {Link} from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* details */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-4xl font-semibold">Wisata Alam Prabumulih, Surga Tersembunyi di Sumsel</h1>
                    <div className="flex items-center gap-2 text-xs text-gray-400 ">
                        <span>Ditulis Oleh</span>
                        <Link className="text-blue-800 font-medium">Denun cuy</Link>
                        <span>pada</span>
                        <Link className="text-blue-800 font-medium">Wisata Alam</Link>
                        <span>3 hari yang lalu</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">
                        Prabumulih, sebuah kota kecil yang terletak di Sumatera Selatan, memiliki
                        potensi wisata alam yang sangat menakjubkan. Dari hutan tropis yang masih asri
                        hingga air terjun yang mempesona, kota ini menawarkan banyak keindahan alam yang
                        belum banyak diketahui orang.
                    </p>
                </div>
                <div className="hidden lg:block lg:w-2/5">
                    <Image src="postImg.jpeg" className="rounded-2xl" w="600"/>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* text */}
                <div className="flex flex-col gap-6 text-justify lg:w-5/6">
                    <div className="flex flex-col gap-6 text-justify lg:w-5/6">
                        <p>
                            Salah satu destinasi wisata yang paling populer di Prabumulih adalah Taman
                            Nasional Kerinci Seblat. Dengan pemandangan alam yang luar biasa, taman nasional
                            ini menjadi tempat yang ideal untuk trekking dan menikmati keindahan alam. Hutan
                            tropis yang lebat dengan udara sejuk memberikan pengalaman berpetualang yang tak
                            terlupakan. Di sini, para pengunjung dapat menjelajahi jalur-jalur pendakian
                            yang menawarkan pemandangan spektakuler dari puncak gunung, lembah yang dalam,
                            dan air terjun yang mengalir deras. Selain itu, taman ini juga merupakan rumah
                            bagi berbagai spesies langka, seperti harimau Sumatra yang ikonik, gajah
                            Sumatra, dan berbagai jenis burung langka yang sulit ditemukan di tempat lain.
                            Keberadaan satwa liar ini menjadikan Taman Nasional Kerinci Seblat sebagai
                            tempat yang menarik bagi para penggemar alam liar dan fotografer satwa.
                            Pengunjung yang beruntung bahkan bisa menyaksikan interaksi antara satwa-satwa
                            tersebut dalam habitat alami mereka, sebuah pengalaman yang sangat berharga bagi
                            pencinta alam.
                        </p>
                        <p>
                            Tidak hanya itu, Prabumulih juga dikenal dengan kekayaan budaya dan sejarahnya
                            yang mendalam. Salah satu situs bersejarah yang dapat dikunjungi adalah Benteng
                            Kuto Besak, sebuah bangunan peninggalan sejarah yang memiliki nilai strategis
                            tinggi. Dahulu, benteng ini digunakan sebagai markas pertahanan pada masa
                            penjajahan dan perjuangan kemerdekaan. Kini, Benteng Kuto Besak menjadi simbol
                            keberanian masyarakat Prabumulih dalam mempertahankan kemerdekaan dan menjadi
                            destinasi wisata yang memberikan wawasan tentang perjuangan bangsa. Di sekitar
                            benteng, terdapat berbagai artefak sejarah yang dipamerkan, serta pemandu wisata
                            yang siap menjelaskan sejarah dan peran penting benteng ini dalam perjuangan
                            kemerdekaan Indonesia. Bagi pengunjung yang tertarik dengan sejarah, mengunjungi
                            benteng ini adalah cara yang tepat untuk lebih memahami latar belakang
                            perjuangan lokal.
                        </p>
                        <p>
                            Bagi pecinta kuliner, Prabumulih menawarkan hidangan khas yang tidak kalah
                            menarik untuk dicoba. Salah satunya adalah **Pempek Prabumulih**, yang terkenal
                            dengan cita rasa pedas dan gurih. Pempek ini memiliki keunikan tersendiri dengan
                            menggunakan bahan-bahan lokal berkualitas yang membuat rasa dan teksturnya
                            berbeda dari pempek daerah lainnya. Selain pempek, terdapat pula berbagai
                            makanan khas daerah lainnya yang siap menggoyang lidah, seperti **Lempah
                            Kuning**, sebuah masakan berkuah kuning yang terbuat dari ikan dan bumbu rempah
                            yang kaya. Kuliner Prabumulih ini sangat cocok bagi mereka yang ingin mencicipi
                            cita rasa khas Sumatera Selatan yang autentik dan kaya akan rasa.
                        </p>
                    </div>

                </div>
                {/* menu */}
                <div className="text-sm x-4 h-max sticky top-8 lg:w-1/6">
                    <h1 className="mb-4 text-sm font-medium">Penulis</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src="pp.JPG"
                                className="w-12 h-12 rounded-full object-cover"
                                w="48"
                                h="48"/>
                            <Link className="text-blue-800">Denun cuy</Link>
                        </div>
                        <p className="text-xs text-gray-500">Penulis adalah seorang wisatawan yang gemar
                            menjelajahi tempat-tempat baru di Indonesia.</p>
                        <div className="flex gap-2">
                            <Link><Image src="instagram.svg"/></Link>
                            <Link><Image src="facebook.svg"/></Link>
                        </div>
                    </div>
                    <PostMenuActions/>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Kategori</h1>
                    <div className="flex flex-col gap-1 text-sm underline">
                        <Link to="/">Semua</Link>
                        <Link to="/">Wisata Alam</Link>
                        <Link to="/">Kuliner</Link>
                        <Link to="/">Budaya</Link>
                        <Link to="/">Berita</Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Pencarian</h1>
                    <Search/>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default SinglePostPage;
