import React from "react";
import DaurUlangImage from '../asset/daur ulang.jpg';
import PlastikSampahImage from '../asset/plastik sampah.jpg';
import LingkunganImage from '../asset/lingkungan.jpeg'; // Perbaiki path di sini
import { Link } from "react-router-dom";

const Artikel = () => {
    return (
        <section id="Artikel" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                 Artikel
                </h2>
                <p className="pb-[3rem]">Klik Gambar Di Bawah!</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>  
                        <Link to={"/artikel"} className=" p-4 rounded">
                            <img src={PlastikSampahImage} alt="Sampah Plastik" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-2xl font-bold mb-2">Sampah Plastik</h3>
                        </Link>
                    </div>
                    <div>  
                        <Link to={"/artikel2"} className=" p-4 rounded">
                            <img src={DaurUlangImage} alt="Daur Ulang" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-2xl font-bold mb-2">Daur Ulang</h3>
                        </Link>
                    </div>
                    <div>  
                        <Link to={"/artikel3"} className=" p-4 rounded">
                            <img src={LingkunganImage} alt="Lingkungan" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-2xl font-bold mb-2">Lingkungan Hidup</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Artikel;