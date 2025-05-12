import React from 'react'
import Image from 'next/image';
import port1 from '@/assets/images/port-1.svg';
import port2 from '@/assets/images/port-2.svg';
import port3 from '@/assets/images/port-3.svg';
import soya from '@/assets/images/soya.svg'
import Projects from '../Projects';
import Contact from '../Contact';

function page() {

  return (

    <div className='container mx-auto text-white'>

      <div>

        <div className='pt-[260px] flex relative pb-[200px]'>

          <div className='leading-[26px]'>
            <h1 className='text-[48px] font-bold'>Tajribamiz davomida</h1> <br />
            <h1 className='text-[48px] font-normal'>turli xil hajmdagi</h1> <br />
            <h1 className='text-[48px] font-bold text-[#5A00DB]'>IT loyihalarini</h1> <br />
            <h1 className='text-[48px] font-bold'>ishga tushira oldik</h1>
          </div>

          <div className=''>
            <Image className='absolute right-[310px]' src={port2} alt='service-img' />
            <Image className='absolute right-[30px] top-[230px]' src={port1} alt='service-img' />
            <Image className='absolute right-[290px] top-[430px]' src={port3} alt='service-img' />

            <Image className='right-[-150px] absolute top-[50px] -z-20' src={soya} alt='soya-img' />

            <div className='w-[270px] h-[270px] rounded-[10px] right-[60px] top-[220px] -z-10 bg-[#ffffff16] absolute'></div>
          </div>

        </div>

      </div>

      <Projects />
      <Contact />

    </div>
  )
}

export default page