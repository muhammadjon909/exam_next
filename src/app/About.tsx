import React from 'react'
import soya from "@/assets/images/soya.svg"
import soya2 from "@/assets/images/soya 2.svg"
import pc from '@/assets/images/nout.svg'
import Image from 'next/image'
import iconV1 from '@/assets/icons/v1.svg'
import iconV2 from '@/assets/icons/v2.svg'
import iconV3 from '@/assets/icons/v3.svg'
import iconV4 from '@/assets/icons/v4.svg'

function About() {
    return (

        <>

        <div className='pt-[50px] bg-[#0E041D] h-screen -z-50 relative'>

            <div>
                <div className='w-[350px] h-[460px] bg-[#ffffff0b] absolute right-[270px] top-[100px] rounded-[25px] -z-10'></div>
                <div className='w-[400px] h-[300px] bg-[#ffffff0f] absolute bottom-[-30] right-[610px] rounded-[25px] -z-10'></div>
            </div>

            <div className=''>
                <Image className='absolute -z-20 right-[40px] top-[120px] left-[]' src={soya} alt="soya" />
                <Image src={soya2} alt='soya2' className='absolute -z-20 bottom-0 right-[320px]' />
            </div>

            <div className='container mx-auto text-[white] '>

                <div className='pt-[50px] w-1/2'>
                    <span className='font-bold text-[50px]'>Yuqori sifatdagi</span> <br />
                    <span className='font-light text-[54px]'>aniqlikka asoslanib</span> <br />
                    <span className='font-bold text-[50px] text-[#5A00DB]'>istalgan turdagi</span><br />
                    <span className='font-bold text-[52px]'>dasturlarni tayyorlaymiz</span>

                    <button className='cursor-pointer px-[24px] mt-[30px] py-[12px] rounded-[5px] font-semibold text-[18px] bg-[#5A00DB]'>Xizmatlar haqida</button>
                </div>

                <div className=''>
                    <Image className='absolute right-0 bottom-0 -z-10' src={pc} alt="" width={950} height={786} />
                </div>

            </div>

            <div className='text-white flex container mx-auto gap-[50px] justify-center pt-[160px]'>

                <div className="relative flex justify-center items-center gap-2.5 
  py-[16px] w-[250px] border-2 rounded-[14px] 
  
  bg-white/10 border-white/20 backdrop-blur-md 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
  after:bg-[linear-gradient(to_right,_#000,_white,_#000)]">
                    <Image src={iconV1} alt="icon" />
                    <p>
                        <span className="text-[24px] font-semibold text-white">7+ yillik</span> <br />
                        <span className="text-[17px] text-white">Umumiy tajriba</span>
                    </p>
                </div>


                <div className="relative flex justify-center items-center gap-2.5 
  py-[16px] w-[250px] border-2 rounded-[14px] 
  bg-white/10 border-white/20 backdrop-blur-md 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
  after:bg-[linear-gradient(to_right,_#000,_white,_#000)]"
                >
                    <Image src={iconV2} alt="icon" />
                    <p>
                        <span className="text-[24px] font-semibold text-white">5+</span> <br />
                        <span className="text-[17px] text-white">Yirik loyihalar</span>
                    </p>
                </div>


                <div className="relative flex justify-center items-center gap-2.5 
  py-[16px] w-[250px] border-2 rounded-[14px] 
  bg-white/10 border-white/20 backdrop-blur-md 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
  after:bg-[linear-gradient(to_right,_#000,_white,_#000)]"
                >
                    <Image src={iconV3} alt="icon" />
                    <p>
                        <span className="text-[24px] font-semibold text-white">8+</span> <br />
                        <span className="text-[17px] text-white">Xizmat turlari</span>
                    </p>
                </div>


                <div className="relative flex justify-center items-center gap-2.5 
  py-[16px] w-[250px] border-2 rounded-[14px] 
  bg-white/10 border-white/20 backdrop-blur-md 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-px 
  before:bg-[linear-gradient(to_right,_#000,_white,_#000)] 
  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
  after:bg-[linear-gradient(to_right,_#000,_white,_#000)]"
                >
                    <Image src={iconV4} alt="icon" />
                    <p>
                        <span className="text-[24px] font-semibold text-white">100%</span> <br />
                        <span className="text-[17px] text-white">Xavfsizlik</span>
                    </p>
                </div>


            </div>
        </div>

            
            <div className='bg-[#5A00DB]'>
                <div className='container mx-auto text-[white] py-[30px]'>
                    <h1 className='text-[48px] font-bold'>Biz haqimizda</h1>
                    <p className='text-[20px] font-medium'>Qisqacha ma’lumot</p>
                </div>
            </div>
            
        </>
    )
}

export default About