import React from "react";
import coverVideo from '../asset/video.mp4'; // Ganti dengan path video Anda

const Hero = () => {
    return (
    <section className="h-screen relative">
        <video 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            autoPlay 
            loop 
            muted
        >
            <source src={coverVideo} type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex justify-center items-center text-center p-6 text-white">
            <div>
                <h2 className="text-5xl font-bold mb-4">Cinta Alam, Ciptakan Perubahan!</h2>
                <p className="text-2xl mb-8">Di EcoAware, kami mengajak Anda untuk mengambil langkah kecil yang berdampak besar bagi lingkungan. Temukan tips, panduan, dan solusi praktis untuk hidup lebih berkelanjutan dan menjaga kelestarian alam. Mari bergerak bersama untuk masa depan yang lebih hijau!</p>
            </div>
        </div>
    </section>
    )
}

export default Hero;