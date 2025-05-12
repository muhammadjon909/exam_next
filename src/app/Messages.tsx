import React from 'react'
import m1 from '@/assets/icons/message-1.svg'
import m2 from '@/assets/icons/message-2.svg'
import m3 from '@/assets/icons/message-3.svg'
import m4 from '@/assets/icons/message-4.svg'
import m5 from '@/assets/icons/message-5.svg'
import m6 from '@/assets/icons/message-6.svg'
import m7 from '@/assets/icons/message-7.svg'
import m8 from '@/assets/icons/message-8.svg'
import m9 from '@/assets/icons/message-9.svg'
import Image from 'next/image'


function Messages() {

    return (
        <div className='container mx-auto text-white pt-[150px]'>

            <div className='text-center pb-[75px]'>
                <h1 className='text-[48px] font-bold'>Xizmat turlari</h1>
                <p>
                    Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
                </p>
            </div>

            
            <div className=''>

                <div className='flex gap-[30px]'>
                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m1} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Landing sahifalar</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m2} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Korporativ veb-sayt</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki mahsulotlar haqida ma'lumot berish.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m3} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Online do’kon</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov tizimlari va mahsulotni boshqarish tizimi mavjud.
                        </p>
                    </div>
                </div>


                <div className='flex gap-[30px] py-[30px]'>
                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m4} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>CRM tizimi</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m5} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Portfolio saytlari</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m6} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Blog sahifalari</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            O‘z fikrlari, yangiliklari yoki ma'lumotlarini o‘rtoqlashish.
                            Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish uchun.
                        </p>
                    </div>
                </div>


                <div className='flex gap-[30px]'>
                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m7} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Ta’lim platformasi</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m8} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>ERP  platformasi</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                            ERP platformasi korxona yoki tashkilotning barcha jarayonlarini birlashtiruvchi kompleks dasturiy ta'minotdir. U tashkilotning ishlab chiqarish.
                        </p>
                    </div>

                    <div className=" hover:bg-[#5A00DB] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                    relative w-[433px] h-[438px]  border-2 rounded-[17px] text-center flex flex-col justify-center items-center
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">
                        <Image className='mx-auto' src={m9} alt='message-img' />
                        <h1 className='text-[30px] font-semibold pt-[25px]'>Alohida loyihami ?</h1>
                        <p className='w-[350px] text-[18px] pt-[10px]'>
                        Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz. Agarda sizda yangi startap bo’lsa biz siz bilan uni rivojlantirish ustida ishlashga tayyormiz. 
                        </p>
                    </div>
                </div>
                
                

               

            </div>


        </div>
    )
}

export default Messages