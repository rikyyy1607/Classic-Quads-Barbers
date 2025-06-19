import React, { useEffect } from 'react'
import scrollToTop from '../helpers/scrollToTop'

function About() {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <img
          className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full'
          src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg'
        />
        <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">
          Tentang Kami
        </h2>
      </div>

      <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90"></h2>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-4xl">Awal Perjalanan Kami</p>
          <p className="italic">Indonesia | Sejak 2023</p>
          <p className="max-w-lg mx-auto text-xl">
            Nab Barber lahir dari hasrat mendalam terhadap seni barber dan komitmen kuat untuk melayani masyarakat. Cerita kami dimulai di sebuah barbershop kecil dan sederhana, tempat di mana Nabilla Christanti, pendiri kami, mengasah keahlian dan membangun hubungan hangat dengan klien pertama kami.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Dari awal yang sederhana itu, kabar tentang kualitas layanan dan suasana ramah kami menyebar cepat. Seiring dengan meningkatnya reputasi, tim kami pun berkembang, dengan barbers berbakat yang selalu mengutamakan potongan rambut presisi dan cukur klasik yang membuat pelanggan merasa percaya diri dan tampil maksimal.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Hingga kini, kami tetap setia pada nilai-nilai awal kami: keterampilan terbaik, suasana hangat, dan dedikasi tanpa henti untuk membantu pelanggan menemukan gaya terbaik mereka.
          </p>
        </div>
      </section>

      <section className="py-20 gap-4 flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Kisah Kami</h2>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-4xl">Siapa Kami</p>
          <p className="italic">Profesional yang Berdedikasi</p>
          <p className="max-w-lg mx-auto text-xl">
            Di jantung kota kami, sebuah barbershop kecil dan sederhana membuka pintunya. Di sanalah Nabilla memulai perjalanannya, dengan gunting, pisau cukur, dan semangat yang tinggi untuk kesempurnaan. Sejak awal, dedikasi Nabilla pada keahliannya sudah terlihat berbeda.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Seiring waktu, reputasi Nabilla sebagai barber handal pun berkembang. Ia membangun tidak hanya bisnis yang sukses, tetapi juga hubungan yang kuat dan hangat dengan para pelanggan. Barbershop ini menjadi tempat berkumpulnya teman-teman, berbagi cerita, dan tawa yang mengisi ruangan.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Kini, Nab Barber telah berkembang, namun komitmen kami terhadap keunggulan tetap sama. Kami memperluas tim dengan barber-barber terpilih yang tidak hanya ahli, tetapi juga seniman sejati. Bagi kami, potongan rambut bukan sekadar layanan — itu adalah pengalaman.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
