import Image from 'next/image';
import type { Metadata } from 'next'
//For dynamic metadata can use generateMetadata to generate matadata paasing values to function
import myimage from './myimage.jpg';
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Image optimization and static metadata',
    description: 'Image optimization and static metadata',
  }
 
export default function Page() {
  return (
    <div className={inter.className}>
        <p>Optimization :</p>
    <Image
      src={myimage}
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  )
}