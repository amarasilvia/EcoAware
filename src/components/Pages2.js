import React from 'react'
import Navbar from './Navbar'

const Pages = () => {
  return (
    <>
    <Navbar/>
    <div className="p-6 rounded-lg transition-colors duration-300 my-12">
    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Daur Ulang</h3>
    <p className="text-gray-700 mb-4 text-start">
    Daur ulang sampah adalah proses mengubah bahan-bahan yang tidak terpakai atau terbuang menjadi 
    produk baru yang dapat digunakan kembali. Ini adalah salah satu langkah penting dalam menjaga
     keberlanjutan lingkungan, mengurangi tekanan pada tempat pembuangan sampah, dan menghemat sumber daya alam.
      Menurut Environmental Protection Agency (EPA), daur ulang mengurangi emisi gas rumah kaca, menghemat energi, 
      dan mengurangi dampak polusi dari produksi bahan baru.
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Manfaat Daur Ulang</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Mengurangi Sampah di Tempat Pembuangan Akhir (TPA): Tempat pembuangan akhir (TPA) di banyak negara sudah hampir mencapai
           kapasitasnya. Dengan mendaur ulang, kita mengurangi jumlah limbah yang berakhir di TPA, memperpanjang umur fasilitas tersebut
            dan mengurangi pencemaran tanah dan air yang diakibatkan oleh pembusukan limbah.</li>

        <li>Menghemat Sumber Daya Alam: Proses pembuatan produk dari bahan mentah sering kali membutuhkan banyak energi dan sumber daya
           alam. Sebagai contoh, daur ulang kertas mengurangi kebutuhan akan pohon baru, daur ulang plastik mengurangi ketergantungan pada 
           bahan bakar fosil, dan daur ulang logam menghemat bahan tambang.</li>

        <li>Menghemat Energi: Daur ulang umumnya membutuhkan energi yang jauh lebih sedikit dibandingkan dengan pembuatan produk baru dari
           bahan mentah. Misalnya, daur ulang aluminium membutuhkan energi 95% lebih sedikit dibandingkan dengan produksi aluminium dari bijih
            bauksit. Menurut EPA, satu ton kertas daur ulang dapat menghemat 4.100 kWh energi.</li>

        <li>Mengurangi Polusi: Daur ulang mengurangi polusi yang dihasilkan dari proses ekstraksi, pengolahan, dan manufaktur bahan mentah.
           Limbah industri seperti gas beracun dan bahan kimia berbahaya dapat diminimalkan dengan mendaur ulang bahan-bahan bekas.</li>

          <li>Mendorong Ekonomi Sirkular: Dalam ekonomi sirkular, produk didesain agar dapat didaur ulang atau digunakan kembali, mengurangi limbah.
             Ini menciptakan peluang baru bagi inovasi, lapangan pekerjaan, dan bisnis daur ulang serta manufaktur produk daur ulang.</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Proses Daur Ulang</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Pengumpulan: Sampah yang dapat didaur ulang dikumpulkan dari rumah tangga, tempat usaha, dan pusat daur ulang. Beberapa negara
           menerapkan sistem pemilahan sampah dari sumbernya, sehingga memudahkan pengelolaan limbah daur ulang.
        </li>

        <li>Pemilahan dan Pembersihan: Sampah yang terkumpul dipilah berdasarkan jenisnya (kertas, plastik, logam, kaca, dll.) dan dibersihkan
           untuk menghilangkan kontaminasi. Pemilahan ini penting agar proses daur ulang dapat berjalan dengan efektif dan menghasilkan produk berkualitas tinggi.
        </li>

        <li>Pengolahan: Setelah dipilah, sampah yang dapat didaur ulang diproses sesuai dengan jenis materialnya. Kertas diproses menjadi pulp, plastik 
          dilebur dan dibentuk menjadi pellet, logam dilebur menjadi ingot, dan kaca dihancurkan dan dilebur kembali untuk digunakan.
        </li>

        <li>Pembuatan Produk Baru: Material daur ulang kemudian digunakan sebagai bahan baku untuk membuat produk baru. Contohnya, botol plastik PET dapat diubah 
          menjadi kain poliester, kertas daur ulang bisa menjadi kertas cetak baru, dan logam daur ulang bisa digunakan untuk konstruksi atau peralatan rumah tangga.</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Jenis bahan yang bisa di Daur Ulang</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Kertas: Kertas adalah salah satu bahan yang paling mudah didaur ulang. Kertas koran, karton, dan kertas kantor dapat diubah kembali menjadi kertas 
          baru atau produk berbasis kertas lainnya. Proses daur ulang kertas dapat mengurangi deforestasi dan penggunaan air serta energi dalam produksi kertas baru.</li>

        <li>Plastik: Beberapa jenis plastik, seperti PET (Polyethylene Terephthalate) dan HDPE (High-Density Polyethylene), dapat didaur ulang menjadi produk baru 
          seperti botol, karpet, dan tekstil. Namun, beberapa jenis plastik yang lebih kompleks sulit didaur ulang, dan masih banyak sampah plastik yang berakhir di TPA atau lautan.</li>

        <li>Logam: Logam seperti aluminium, baja, tembaga, dan kuningan sangat bernilai untuk didaur ulang. Logam dapat dilebur dan digunakan kembali tanpa kehilangan kualitasnya.
           Daur ulang logam mengurangi kebutuhan akan penambangan baru yang merusak lingkungan.</li>

        <li>Kaca: Kaca bisa didaur ulang secara tak terbatas tanpa kehilangan kualitas. Proses daur ulang kaca jauh lebih hemat energi dibandingkan dengan pembuatan kaca dari bahan mentah, yaitu pasir silika.</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Tantangan dalam Daur Ulang</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Kurangnya Kesadaran Masyarakat: Masih banyak masyarakat yang belum memahami pentingnya daur ulang atau tidak memilah sampah dengan benar, sehingga membuat proses daur ulang menjadi tidak efektif.</li>

        <li>Kontaminasi Sampah: Ketika sampah daur ulang tercampur dengan limbah non-daur ulang atau limbah organik, biaya pemrosesan menjadi lebih tinggi dan dapat menurunkan kualitas bahan yang didaur ulang.</li>

        <li>Infrastruktur yang Terbatas: Beberapa negara atau wilayah belum memiliki infrastruktur daur ulang yang memadai, sehingga sampah yang dapat didaur ulang berakhir di TPA atau dibakar.</li>

        <li>Permintaan Pasar: Beberapa produk dari bahan daur ulang memiliki kualitas yang lebih rendah atau tidak diminati oleh pasar, sehingga mengurangi insentif untuk proses daur ulang secara ekonomi</li>
      </ol>
  
    </p>
    </div>

    <div className='mb-8'>
    <h3 className="text-3xl font-bold mb-4 text-rose-700">Solusi untuk Meningkatkan Daur Ulang</h3>
    <p className="text-gray-700 text-start">
      <ol className='list-decimal list-inside'>
        <li>Edukasi Masyarakat: Meningkatkan kesadaran masyarakat akan pentingnya daur ulang dan cara memilah sampah dengan benar adalah langkah awal yang penting. Program edukasi melalui sekolah, kampanye publik, 
          dan media sosial dapat membantu.</li>

        <li>Peningkatan Infrastruktur: Pemerintah dan sektor swasta perlu bekerja sama untuk membangun infrastruktur daur ulang yang lebih baik, termasuk fasilitas pemilahan sampah, pusat pengolahan daur ulang, dan
           kemudahan akses untuk pengumpulan sampah daur ulang.</li>

        <li>Inovasi Teknologi: Pengembangan teknologi baru untuk mendaur ulang lebih banyak jenis bahan dengan lebih efisien bisa membantu mengatasi masalah sampah yang sulit didaur ulang. Misalnya, teknologi yang
           dapat mendaur ulang plastik campuran atau mengubah limbah plastik menjadi bahan bakar.</li>

        <li>Kebijakan Pemerintah: Pemerintah dapat memperkenalkan regulasi yang mendorong industri untuk menggunakan bahan daur ulang, memberikan insentif bagi bisnis daur ulang, dan melarang produk-produk yang sulit 
          didaur ulang.</li>
      </ol>
  
    </p>
    </div>

</div>
    </>
  )
}

export default Pages