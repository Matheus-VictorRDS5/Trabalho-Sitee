import { useState } from 'react'
import noite from './assets/img_quasefooter.png'
import './App.css'
import { UserRound, Clock, BedSingle } from 'lucide-react'

export default function App() {

  return (
    <>
      <main>
        <header>
          <h1>Boa noite, mister</h1>
        </header>
        <div className="fundo"><img src={noite} alt="" />
        {/* pqp que bagunca */}
          <p>03/7/2026</p>
           <div className="quasefooter">
            <div className="card">
              <p>Regular Horário</p>
              <small>Olhar horário para dormir</small>
            </div>
            <div className="card">
              <p>Tempo e Graus</p>
              <small>Olhar o tempo e os graus.</small>
            </div>
           </div>
        </div>
          <footer>
            <div className="icons"><BedSingle className='icons'/></div>
            <div className="icons"><UserRound className='icons'/></div>
            <div className="icons"><Clock className='icons'/></div>
          </footer>
      </main>
    </>
  )
}