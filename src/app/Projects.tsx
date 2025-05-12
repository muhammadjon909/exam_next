import React from 'react'
import Image from 'next/image'

import project1 from '@/assets/images/project-1.svg'
import project2 from '@/assets/images/project-2.svg'
import project3 from '@/assets/images/project-3.svg'


function Projects() {
    return (

        <div className='container mx-auto text-white pt-[170px]'>

            <div className='text-center'>
                <h1 className='text-[50px] font-bold'>Loyihalarimiz</h1>
                <p className='text-[18px]'>biz haqimizda gapirsin !</p>
            </div>


            <div>

                <div className='flex pt-[65px] items-center gap-[50px] '>
                    <Image src={project1} alt='project-icon' />
                    <div>
                        <h1 className='text-[26px] font-semibold'>Tourmad loyihasi</h1>
                        <p className='text-[18px] py-[20px] pb-[10px]'>
                            Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
                        </p>

                        <button className="relative px-7 py-3 rounded-lg border border-white/20 
                             text-white font-medium bg-white/10 backdrop-blur-md 
                             hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                             before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                             after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             overflow-hidden cursor-pointer"
                        >
                            Loyihani ko'rish
                        </button>
                    </div>
                </div>

                <div className='flex pt-[70px] items-center gap-[50px]'>
                    <div className='text-end'>
                        <h1 className='text-[26px] font-semibold'>ProRun loyihasi</h1>
                        <p className='text-[18px] py-[20px] pb-[10px]'>
                            Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin.
                            Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.

                        </p>

                        <button className="relative px-7 py-3 rounded-lg border border-white/20 
                             text-white font-medium bg-white/10 backdrop-blur-md 
                             hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                             before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                             after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             overflow-hidden cursor-pointer"
                        >
                            Loyihani ko'rish
                        </button>
                    </div>
                    <Image src={project2} alt='project-icon' />
                </div>

                <div className='flex pt-[60px] items-center gap-[50px] '>
                    <Image src={project3} alt='project-icon' />
                    <div>
                        <h1 className='text-[26px] font-semibold'>Xalq trans loyihasi</h1>
                        <p className='text-[18px] py-[20px] pb-[10px]'>
                            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>

                        <button className="relative px-7 py-3 rounded-lg border border-white/20 
                             text-white font-medium bg-white/10 backdrop-blur-md 
                             hover:text-black hover:bg-white hover:border-[white] transition duration-200 
                             before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                             before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                             after:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
                             overflow-hidden cursor-pointer"
                        >
                            Loyihani ko'rish
                        </button>
                    </div>
                </div>

                
            </div>

            <div className='flex justify-center pt-[60px]'>
                <button className='cursor-pointer px-[24px] mt-[30px] py-[12px] rounded-[8px] font-semibold text-[18px] bg-[#5A00DB]'>Boshqa loyihalarni ko’rish</button>
            </div>


        </div>
    )
}

export default Projects