import Titulo from '@/componentes/titulo'
import Card from '@/componentes/titulo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <nav className = "flex gap-4 justify-between items-end bg-cyan-800 w-full p-3">
      <h1 className='flex items-center gap-2 text-5xl text-color bg-gray-400	font-bold uppercase'> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12 h-12">
        <path fill-rule="evenodd" d="M13 3v1.27a.75.75 0 001.5 0V3h2.25A2.25 2.25 0 0119 5.25v2.628a.75.75 0 01-.5.707 1.5 1.5 0 000 2.83c.3.106.5.39.5.707v2.628A2.25 2.25 0 0116.75 17H14.5v-1.27a.75.75 0 00-1.5 0V17H3.25A2.25 2.25 0 011 14.75v-2.628c0-.318.2-.601.5-.707a1.5 1.5 0 000-2.83.75.75 0 01-.5-.707V5.25A2.25 2.25 0 013.25 3H13zm1.5 4.396a.75.75 0 00-1.5 0v1.042a.75.75 0 001.5 0V7.396zm0 4.167a.75.75 0 00-1.5 0v1.041a.75.75 0 001.5 0v-1.041zM6 10.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm0 2.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>
        Car meeting</h1>
        <a href="/sobre">sobre</a>
      </nav>
        
        <Titulo> Destaques do evento </Titulo>
          <section className='flex gap-4 p-4'>
            <Card titulo="" nota={0.0} />
        </section>
        </main>
  )
}
