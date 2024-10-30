import React from 'react'
import Navbar from './Navbar'

const Pages = () => {
  return (
    <>
    <Navbar/>
    <div className="p-6 rounded-lg transition-colors duration-300 my-12">
      <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Apa itu Sampah Plastik?</h3>
    <p className="text-gray-700 text-start">
        Sampah plastik adalah semua barang bekas atau tidak terpakai yang materialnya
        diproduksi dari bahan kimia tak terbarukan. Sebagian besar sampah plastik yang digunakan sehari-hari
        biasanya dipakai untuk pengemasan. Jadi, kantong plastik juga masih sering dipakai sebagai tempat sampah organik yang 
        akan dibuang ke tempat pembuangan sampah. Melansir Daihatsu.co.id dari situs UN Environment, bahan kimia yang digunakan
        untuk membuat plastik biasanya berasal dari minyak, gas alam, dan batu bara. Sejak 1950, sampah plastik yang diproduksi mencapai 8,3 miliar
        ton dan sekitar 60% plastik berakhir di tempat pembuangan sampah atau tercecer di lingkungan alam. Secara tidak sadar, penggunaan plastik mungkin sudah 
        menjadi comfort zone bagi banyak orang. Saat berbelanja, kemasan dan kantong plastik juga menjadi alternatif yang praktis, mudah didapatkan. Bagi para 
        pelaku industri, bahan plastik juga relatif murah dibandingkan material lainnya.
    </p>
      </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Jenis Sampah Plastik</h3>
    <p className="text-gray-700 text-start">
    Plastik terdiri dari berbagai jenis, seperti polietilena (PE), polipropilena (PP), polivinil klorida (PVC), 
    dan lainnya. Jenis plastik ini umumnya digunakan untuk kemasan makanan, kantong plastik, botol, dan produk 
    sehari-hari lainnya. Sampah plastik yang tidak dikelola dengan baik akan terakumulasi di lingkungan, mencemari tanah,
     air, dan udara.

    Plastik yang terpecah menjadi potongan kecil disebut mikroplastik. Mikroplastik telah ditemukan di berbagai ekosistem, 
    mulai dari air laut, sungai, hingga di tubuh organisme laut seperti ikan dan kerang. Sebuah studi yang diterbitkan oleh World 
    Health Organization (WHO) menyebutkan bahwa mikroplastik juga telah terdeteksi dalam air minum, baik air kemasan maupun air keran. 
    Hal ini menimbulkan kekhawatiran terkait dampak kesehatan jangka panjang, meskipun penelitian lebih lanjut masih diperlukan.
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Dampak Ekologis</h3>
    <p className="text-gray-700 text-start">
    Salah satu dampak terbesar dari sampah plastik adalah pada ekosistem laut. Hewan laut seperti ikan, burung, penyu, dan mamalia
     laut sering kali mengira plastik sebagai makanan. Menurut World Wildlife Fund (WWF), sekitar 100 ribu mamalia laut dan satu juta
      burung laut mati setiap tahun akibat menelan atau terjerat oleh sampah plastik.
      

    Selain itu, tumpukan sampah plastik di lautan membentuk “pulau sampah” yang luas, seperti Great Pacific Garbage Patch di Samudera 
    Pasifik yang diperkirakan memiliki luas sekitar 1,6 juta kilometer persegi.
    </p>
    </div>
    
    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Dampak Ekonomi</h3>
    <p className="text-gray-700 text-start">
    Sampah plastik juga membawa dampak ekonomi yang signifikan. Sektor pariwisata, khususnya di daerah pesisir, mengalami penurunan karena
     pantai-pantai tercemar plastik. Selain itu, negara-negara harus mengeluarkan biaya besar untuk membersihkan sampah plastik dari lingkungan.

    Menurut sebuah studi oleh Ellen MacArthur Foundation, jika tren produksi dan konsumsi plastik terus berlanjut, pada tahun 2050 jumlah
     plastik di lautan bisa melebihi jumlah ikan. Kondisi ini mengancam industri perikanan global, yang juga berdampak pada ketahanan pangan dan ekonomi 
    negara-negara yang bergantung pada sektor ini
    </p>
    </div>
    

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Solusi untuk Mengatasi Sampah Plastik</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Reduce, Reuse, Recycle (3R): Salah satu solusi paling umum untuk mengurangi sampah plastik adalah melalui prinsip 3R. Mengurangi penggunaan plastik
        sekali pakai (reduce), memanfaatkan kembali plastik yang sudah ada (reuse), dan mendaur ulang plastik agar tidak berakhir di tempat pembuangan (recycle).</li>
        <li>Penggantian dengan Material Ramah Lingkungan: Penggunaan bahan alternatif yang biodegradable atau mudah terurai secara alami bisa menjadi solusi jangka panjang.
        Misalnya, penggantian plastik konvensional dengan plastik berbasis tanaman (bioplastik) atau material seperti kertas dan bambu.</li>
        <li>Kebijakan Pemerintah: Banyak negara mulai memberlakukan kebijakan pelarangan plastik sekali pakai. Pada tahun 2021, Uni Eropa melarang penggunaan produk plastik
        sekali pakai seperti sedotan, piring, dan peralatan makan plastik. Di Indonesia, beberapa kota besar seperti Jakarta sudah mulai melarang penggunaan kantong plastik di pusat perbelanjaan.</li>
        <li> Edukasi dan Kesadaran Masyarakat: Masyarakat perlu lebih sadar akan dampak negatif plastik dan didorong untuk mengubah kebiasaan sehari-hari, seperti membawa tas
        belanja sendiri, menggunakan botol minum yang bisa diisi ulang, serta mengurangi penggunaan produk plastik.</li>
      </ol>
  
    </p>
    </div>


</div>
    </>
  )
}

export default Pages