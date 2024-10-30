import React from "react";
import daurUlang from '../asset/daur ulang2.jpeg';
import monyet from '../asset/monyet.jpeg';
import airTerjun from '../asset/air terjun.jpeg';
import alam from '../asset/alam.jpeg';
import pilahSampah from '../asset/pilah sampah.jpeg';
import menanam from '../asset/menanam.jpeg';

const Galeri = () => {
    return (
        <section id="galeri" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold mb-8">Galeri</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={daurUlang} alt="Daur Ulang" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Hasil Daur Ulang</h3>
                     
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={monyet} alt="Monyet" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Monyet</h3>
                    
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={airTerjun} alt="Air Terjun" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Air terjun</h3>
                    
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={alam} alt="Alam" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Pemandangan</h3>
            
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={pilahSampah} alt="Pilah Sampah" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Pilah Sampah</h3>
            
                    </div>

                    <div className="bg-gray-100 p-4 rounded">
                        <img src={menanam} alt="Menanam" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Menanam</h3>
                    
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Galeri;