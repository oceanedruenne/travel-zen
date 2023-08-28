import Image from 'next/image'
import foret from '../app/resources/img/forest.jpg'
import { Cabin } from 'next/font/google'
import Link from 'next/link'

const cabin = Cabin({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
        <div className='w-1/2 h-full float-left absolute'>
        <Image className='object-cover h-1/3'
              src={foret}
              style={{ width: '100%', height: '100%' }}
              quality={100}
              alt={'Forêt'}>
          </Image>
        </div>
        <div className='w-1/2 h-full float-right'>
          <h1 className='cabin.className text-white text-xl text-right pr-6 pt-8'>TRAVEL<br></br> ZEN</h1>
          <h4 className='cabin.className text-white text-s text-right pr-8 pt-8'>Travel Zen est un site internet permettant de générer automatiquement une liste d'affaires à prendre pour vos vacances selon la destination, la durée des vacances et votre profil. 
          <br></br>Partir en vacances n'a jamais été aussi simple !</h4>
          <div className="flex flex-column flex-nowrap justify-center items-center content-stretch mt-10">
          <Link href="/form_one"><button title="C'EST PARTI" className="text-white bg-darkgreen text-m pt-1 px-2 pb-1 font-medium"> C'EST PARTI</button></Link>
          </div>
        </div>
    </>
  )
}
