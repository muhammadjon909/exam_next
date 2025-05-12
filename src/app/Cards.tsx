import Image from 'next/image'
import React from 'react'

import card1 from '@/assets/images/card-1.svg'
import card2 from '@/assets/images/card-2.svg'
import card3 from '@/assets/images/card-3.svg'


function Cards() {
    return (
        <div className='container mx-auto pt-[60px]'>
            <div className='flex gap-[40px] justify-between'>

                <div className='rounded-[18px] border-2 border-[#ffffff3a] rounded-b-[18px] '>
                    <Image className='rounded-t-[16px]' src={card1} alt='card-img' />

                    <div className="relative text-[white] rounded-b-[18px] p-[30px] pl-[20px] pb-[40px] 
                    bg-white/10 border-white/20 backdrop-blur-md 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

                        <h1 className='text-[26px] font-[600]'>Boshlanishi</h1>
                        <p className='text-[19px] font-normal pt-[10px]'>
                            Biz  --- dan ish boshladik va <br />
                            ---- larni oldimizga maqsad qilib <br />
                            qo’ydik
                        </p>
                    </div>

                </div>

                <div className='rounded-[18px] border-2 border-[#ffffff3a] rounded-b-[18px] '>
                    <Image className='rounded-t-[16px]' src={card2} alt='card-img' />

                    <div className="relative text-[white] rounded-b-[18px] bg-white/10 border-white/20 backdrop-blur-md p-[30px] pl-[20px] pb-[40px] 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

                        <h1 className='text-[26px] font-[600]'>Uzoq muddatli loyihalar</h1>
                        <p className='text-[19px] font-normal pt-[10px]'>
                            Tajribamiz davomida umumiy <br />
                            hisobda - - loyiha uchun <br />
                            -- - muddatda ishlab topshirdik
                        </p>
                    </div>

                </div>

                <div className='rounded-[18px] border-2 border-[#ffffff3a] rounded-b-[18px] '>
                    <Image className='rounded-t-[16px]' src={card3} alt='card-img' />

                    <div className="relative text-[white] rounded-b-[18px] bg-white/10 border-white/20 backdrop-blur-md p-[30px] pl-[20px] pb-[40px] 
                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
                    before:bg-[linear-gradient(to_right,#000,_white,_#000)] 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                    after:bg-[linear-gradient(to_right,#000,_white,_#000)]">

                        <h1 className='text-[26px] font-[600]'>Jamoamiz kengaymoqda</h1>
                        <p className='text-[19px] font-normal pt-[10px]'>
                            Jamoamiz safi esa tobora <br />
                            kengaymoqda. Boshida - kishidan <br />
                            boshlangan faoliyatimiz hozirda <br />
                        </p>
                    </div>

                </div>

            </div>

            <p className='text-[white] text-[18px] pt-[40px]'>
                Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    )
}

export default Cards