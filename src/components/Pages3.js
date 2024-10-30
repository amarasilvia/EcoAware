import React from 'react'
import Navbar from './Navbar'

const Pages = () => {
  return (
    <>
    <Navbar/>    
    <div className="p-6 rounded-lg transition-colors duration-300 my-12">
      <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Pentingnya Menjaga Lingkungan Hidup untuk Keberlanjutam Masa Depan</h3>
    <p className="text-gray-700 mb-4 text-start">
       Lingkungan hidup mencakup segala sesuatu yang ada di sekitar kita, mulai dari udara
        yang kita hirup, air yang kita minum, hingga tanah tempat kita berpijak. Semua elemen 
        tersebut berperan penting dalam mendukung kehidupan manusia dan makhluk lainnya di bumi.
         Namun, seiring dengan perkembangan industri, urbanisasi, dan pertumbuhan populasi, lingkungan
          hidup semakin mengalami tekanan yang mengkhawatirkan. Pemanasan global, deforestasi, pencemaran 
          air dan udara, serta hilangnya keanekaragaman hayati adalah beberapa contoh masalah lingkungan yang 
          semakin mendesak untuk ditangani.
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Mengapa Menjaga Lingkungan Hidup Itu Penting? </h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Menjamin Kesehatan Manusia: Kualitas lingkungan langsung berpengaruh pada kesehatan manusia. Udara bersih,
           air segar, dan makanan yang sehat semuanya bergantung pada lingkungan yang lestari. Menurut World Health Organization 
           (WHO), pencemaran udara menyebabkan lebih dari 7 juta kematian prematur setiap tahun. Selain itu, air yang tercemar dapat 
           menyebabkan penyakit seperti diare, kolera, dan lainnya.</li>

        <li>Menopang Ekosistem dan Keanekaragaman Hayati: Lingkungan yang sehat memungkinkan berfungsinya ekosistem yang mendukung 
          keanekaragaman hayati. Tumbuhan, hewan, dan mikroorganisme memainkan peran penting dalam menjaga keseimbangan alam. Kehilangan
           spesies, baik flora maupun fauna, bisa mengganggu keseimbangan ekosistem, yang pada akhirnya berdampak pada keberlangsungan hidup manusia</li>

        <li>Mengurangi Dampak Perubahan Iklim: Lingkungan yang terjaga dapat membantu mengurangi dampak perubahan iklim. Hutan, misalnya, berfungsi sebagai 
          penyerap karbon alami yang membantu menstabilkan iklim bumi. Penggundulan hutan secara besar-besaran dan emisi gas rumah kaca dari aktivitas manusia 
          mempercepat laju pemanasan global, yang berdampak pada cuaca ekstrem, naiknya permukaan air laut, dan ancaman terhadap kehidupan manusia dan hewan.</li>

        <li>Menjaga Sumber Daya Alam: Sumber daya alam seperti air, tanah, dan mineral merupakan aset yang tidak tergantikan. Pengelolaan lingkungan yang buruk, 
          seperti penambangan berlebihan, pencemaran tanah, dan perusakan hutan, dapat menyebabkan kelangkaan sumber daya ini di masa depan. Penggunaan yang berkelanjutan
           memastikan bahwa generasi mendatang dapat menikmati manfaat yang sama dari sumber daya alam yang kita miliki saat ini.</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Masalah Lingkungan Hidup yang Mendesak </h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Pemanasan Global dan Perubahan Iklim: Salah satu isu lingkungan terbesar yang dihadapi dunia saat ini 
          adalah perubahan iklim. Pemanasan global disebabkan oleh peningkatan emisi gas rumah kaca dari pembakaran bahan bakar
           fosil, deforestasi, dan aktivitas industri lainnya. Menurut Intergovernmental Panel on Climate Change (IPCC), suhu bumi 
           telah meningkat sekitar 1,1°C sejak era pra-industri, dan dampaknya terlihat melalui pencairan es di kutub, meningkatnya 
           frekuensi bencana alam, dan gangguan pada pola cuaca global.</li>

        <li>Pencemaran Udara dan Air: Pencemaran udara terutama berasal dari emisi kendaraan bermotor, pembangkit listrik berbahan 
          bakar fosil, dan industri berat. Pencemaran air terjadi akibat pembuangan limbah industri dan domestik tanpa pengolahan yang memadai.
           Air yang tercemar tidak hanya berbahaya bagi makhluk hidup yang menggunakannya, tetapi juga mengurangi pasokan air bersih yang semakin 
           langka di beberapa bagian dunia.</li>

        <li> Deforestasi: Hutan adalah paru-paru dunia, menyerap karbon dioksida dan menghasilkan oksigen. Namun, menurut Food and Agriculture Organization
           (FAO), setiap tahun sekitar 10 juta hektar hutan hilang akibat aktivitas manusia seperti penebangan liar, alih fungsi lahan untuk pertanian, dan 
           pembangunan. Dampak dari deforestasi meliputi hilangnya habitat, berkurangnya keanekaragaman hayati, dan peningkatan emisi karbon.</li>

        <li>Kehilangan Keanekaragaman Hayati: Seiring dengan kerusakan habitat dan perubahan iklim, banyak spesies yang terancam punah. World Wildlife Fund
           (WWF) memperkirakan bahwa populasi satwa liar telah menurun sebesar 68% sejak tahun 1970. Kehilangan spesies ini mengancam keseimbangan ekosistem 
           dan memperburuk kerentanan terhadap perubahan lingkungan.</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Solusi untuk Menjaga Lingkungan Hidup</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Menerapkan Prinsip Ekonomi Sirkular: Ekonomi sirkular adalah model ekonomi di mana produk dan material
           didesain untuk dapat digunakan kembali atau didaur ulang, sehingga mengurangi limbah dan konsumsi sumber daya.
            Konsep ini mencakup penggunaan energi terbarukan, daur ulang produk, dan pengurangan konsumsi plastik sekali pakai.</li>

        <li>Mengurangi Emisi Karbon: Salah satu cara utama untuk menangani perubahan iklim adalah dengan mengurangi emisi karbon.
           Ini bisa dilakukan melalui penggunaan energi terbarukan seperti tenaga surya dan angin, meningkatkan efisiensi energi, 
           serta beralih ke transportasi yang ramah lingkungan seperti kendaraan listrik atau transportasi umum.</li>

        <li> Melestarikan Hutan dan Reboisasi: Menghentikan deforestasi dan melakukan reboisasi (penanaman kembali hutan) sangat penting 
          untuk melawan perubahan iklim dan melestarikan habitat. Inisiatif global seperti Trillion Tree Campaign mendorong penanaman pohon 
          di seluruh dunia untuk memulihkan hutan yang hilang.</li>

          <li>Pendidikan dan Kesadaran Lingkungan: Salah satu cara paling efektif untuk menjaga lingkungan hidup adalah dengan meningkatkan kesadaran 
            masyarakat akan pentingnya keberlanjutan. Pendidikan lingkungan di sekolah dan kampanye kesadaran publik bisa menginspirasi individu dan komunitas untuk mengambil tindakan nyata dalam melindungi lingkungan.</li>
        
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Peran Individu dalam Menjaga Lingkungan</h3>
    <p className="text-gray-700 mb-4 text-start">
    Setiap orang memiliki peran penting dalam menjaga lingkungan. Langkah kecil seperti mengurangi penggunaan plastik, menghemat air dan energi, serta mendukung produk ramah lingkungan bisa memberikan dampak besar jika dilakukan
     secara kolektif. Kita juga bisa terlibat dalam gerakan komunitas lokal yang fokus pada kegiatan pelestarian alam, seperti penanaman pohon, pengelolaan limbah, atau pelestarian habitat hewan.
    </p>
    </div>

</div>
    </>
  )
}

export default Pages