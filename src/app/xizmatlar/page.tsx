import React from 'react'
import Image from 'next/image';
import service1 from '@/assets/images/servic-1.svg';
import service2 from '@/assets/images/servic-2.svg';
import service3 from '@/assets/images/servic-3.svg';
import soya from '@/assets/images/soya.svg'

import baner from '@/assets/images/banner.svg'
import papka from '@/assets/images/papka.svg'
import fayl from '@/assets/images/fayl.svg'
import karzina from '@/assets/images/korzina.svg'
import crm from '@/assets/images/crm.svg'
import erp from '@/assets/images/erp.svg'
import Contact from '../Contact';

function page() {

  return (

    <div className='container mx-auto'>

      {/* 1 */}
      <div className='pt-[260px] flex relative pb-[330px]'>

        <div className='leading-[26px]'>
          <h1 className='text-[48px] font-bold'>Har bir xizmat turini</h1> <br />
          <h1 className='text-[48px] font-normal'>har bir mijoz uchun</h1> <br />
          <h1 className='text-[48px] font-bold text-[#5A00DB]'>alohida ahamiyatli</h1> <br />
          <h1 className='text-[48px] font-bold'>deb yondoshamiz !</h1>
        </div>

        <div className=''>
          <Image className='absolute right-[310px]' src={service1} alt='service-img' />
          <Image className='absolute right-[30px] top-[230px]' src={service2} alt='service-img' />
          <Image className='absolute right-[290px] top-[430px]' src={service3} alt='service-img' />

          <Image className='right-[-150px] absolute top-[50px] -z-20' src={soya} alt='soya-img' />

          <div className='w-[270px] h-[270px] rounded-[10px] right-[60px] top-[220px] -z-10 bg-[#ffffff16] absolute'></div>
        </div>

      </div>


      

      {/* 2 */}

      <div>

        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>Landing sahifalar</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Qisqa va ta'sirli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Maqsadli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Tez yuklanuvchi</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa soni teng bolsak 5 qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 10-15 soatlik mehnat.
              </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={papka} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>

        
        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>Katalog sahifalari</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Mahsulotlar tavsifi</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Har bir mahsulotning batafsil tavsifi,salom haoyot dunyo xususiyatlari, afzalliklari va rasmlari bilan berilgan.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Turli filtrlar</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozlarning qidirishni osonlashtirish uchun turli xil filtrlar va saralash imkoniyatlari taqdim etiladi.
                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Navigatsiya</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Katalog bo'ylab oson va intuitiv harakatlanish uchun qulay navigatsiya tizimi yaratilgan.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifa 3ta soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 10-15 soatlik mehnat. Narxi: $100
              </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={fayl} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>eCommerce Sahifalari</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Onlayn sotish</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Xavfsiz to'lov</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Yetkazib berish</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300
                </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={karzina} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>CRM Sahifalari</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Mijozlar ma'lumotlari</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Mijozlar bn muloqot</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Tahlil</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
                </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={crm} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>ERP sahifalari</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Korxona Interatiyasi </h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Avtomatlashtirish</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Tahlil va xabarnoma</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
                </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={erp} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>Landing sahifalar</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Qisqa va ta'sirli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Maqsadli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Tez yuklanuvchi</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 10-15 soatlik mehnat.
              </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={papka} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


        <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

          {/* left */}
          <div>
            <div className='px-[75px] py-[40px] relative'>
              <h1 className='text-[35px] font-bold pb-[30px]'>Landing sahifalar</h1>

              <div className='flex gap-[35px]'>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Qisqa va ta'sirli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Maqsadli</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                  </p>
                </div>

              </div>

              <div className='pt-[30px]'>
                <div className='flex items-center gap-[5px]'>
                  <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                  <h1 className='text-[24px] font-semibold'>Tez yuklanuvchi</h1>
                </div>
                <p className='w-[265px] pt-[10px]'>
                  Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                </p>
              </div>

              <p className='text-[18px] pt-[30px] leading-[33px]'>
                Texnik vazifa tayyorlab berish: 1 kun <br />
                Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                Veb Dizayn: 10-15 soatlik mehnat.
              </p>

              <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                 text-white font-medium  backdrop-blur-md 
                 hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                 before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                 after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                 overflow-hidden cursor-pointer">
                Buyurtma berish
              </button>

              <Image className='absolute bottom-0 left-[520px]' src={papka} alt='papka-img' />

            </div>

          </div>

          {/* right */}
          <div>
            <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
          </div>

        </div>


          <div className="relative w-[1280px] h-[725px] border-2 rounded-[20px] mt-[70px] flex gap-[20px]
                      bg-white/10 border-white/20 backdrop-blur-md 
                      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                      before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                      after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

            {/* left */}
            <div>
              <div className='px-[75px] py-[40px] relative'>
                <h1 className='text-[35px] font-bold pb-[30px]'>Landing sahifalar</h1>

                <div className='flex gap-[35px]'>

                  <div>
                    <div className='flex items-center gap-[5px]'>
                      <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                      <h1 className='text-[24px] font-semibold'>Qisqa va ta'sirli</h1>
                    </div>
                    <p className='w-[265px] pt-[10px]'>
                      Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
                    </p>
                  </div>

                  <div>
                    <div className='flex items-center gap-[5px]'>
                      <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                      <h1 className='text-[24px] font-semibold'>Maqsadli</h1>
                    </div>
                    <p className='w-[265px] pt-[10px]'>
                      Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga undashga xizmat qiladi.

                    </p>
                  </div>

                </div>

                <div className='pt-[30px]'>
                  <div className='flex items-center gap-[5px]'>
                    <div className='w-[22px] h-[22px] bg-white rounded-[6px]'></div>
                    <h1 className='text-[24px] font-semibold'>Tez yuklanuvchi</h1>
                  </div>
                  <p className='w-[265px] pt-[10px]'>
                    Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha tez yuklanadi.
                  </p>
                </div>

                <p className='text-[18px] pt-[30px] leading-[33px]'>
                  Texnik vazifa tayyorlab berish: 1 kun <br />
                  Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat bo’ladi.) <br />
                  Veb Dizayn: 10-15 soatlik mehnat.
                </p>

                <button className="relative px-6 py-3 rounded-lg border border-white/20 bg-[#ffffff00] mt-[60px]
                  text-white font-medium  backdrop-blur-md 
                  hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                  after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                  overflow-hidden cursor-pointer">
                  Buyurtma berish
                </button>

                <Image className='absolute bottom-0 left-[520px]' src={papka} alt='papka-img' />

              </div>

            </div>

            {/* right */}
            <div>
              <Image className='rounded-tr-[20px] rounded-br-[20px]' src={baner} alt='banner-img' width={600} height={790} />
            </div>

          </div>

      </div>

      <Contact />
      
    </div>
  )
}

export default page