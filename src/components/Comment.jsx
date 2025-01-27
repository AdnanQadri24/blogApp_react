import Image from "./Image"

const Comment = () => {
    return (
        <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-4">
                <Image src="pp.JPG" className="w-10 h-10 rounded-full object-cover" w="40"/>
                <span className="text-sm font-medium">Denun Cuy</span>
                <span className="text-xs text-gray-500">2 hari yang lalu</span>
            </div>
            <div className="mt-4">
                <p className="text-sm">Prabumulih memiliki banyak tempat wisata yang menarik,
                    seperti Danau Ranau dan Air Terjun Riam Lematang. Selain itu, kuliner khas
                    Prabumulih seperti pindang ikan patin patut dicoba oleh para wisatawan. Semua
                    ini membuat Prabumulih menjadi kota yang kaya akan budaya dan keindahan alam.</p>
            </div>
        </div>
    )
}

export default Comment;
