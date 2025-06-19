import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";
import FloatingWhatsApp from './components/FloatingWhatsApp';
function App() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className="relative">
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Nab Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
     <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">Tentang</h2>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-4xl">Siapa Kami</p>
          <p className="italic">Indonesia | Sejak 2023</p>
          <p className="max-w-lg mx-auto text-xl">
            Tujuan utama Anda untuk layanan grooming dan penataan rambut terbaik di jantung kota. Didirikan dengan semangat tinggi terhadap seni barber dan komitmen terhadap komunitas, kami berdedikasi untuk memberikan pengalaman grooming yang luar biasa sehingga Anda tampil dan merasa terbaik.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Didirikan pada tahun 2023, Nab Barber lahir dari impian seumur hidup dan dedikasi terhadap dunia barbering. Nabilla Christanti, pendiri kami, membayangkan sebuah tempat di mana siapa pun bisa merasakan seni grooming yang tak lekang oleh waktu dalam suasana yang nyaman dan ramah.
          </p>
          <p className="max-w-lg mx-auto text-xl">
            Tim barber kami yang berpengalaman dan terampil adalah tulang punggung kesuksesan kami. Kami bangga memiliki staf yang berbakat dan beragam, masing-masing berkomitmen memberikan layanan terbaik. Para barber kami bukan hanya profesional, tetapi juga seniman yang terus mengasah kemampuan dan mengikuti tren terbaru di industri ini.
          </p>
        </div>
        <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg' />
      </section>

      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices/>
        <SalonServices/>
          <FloatingWhatsApp />
      </section>
    </div>
  );
}

export default App;
