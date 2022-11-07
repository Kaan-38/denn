import React from 'react'
import './LiveChat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const LiveChat = () => {
  return (
    <div className='LiveChatContainer'>
        <div className='LiveChatContainerHeader'>
           <h4>
             TÜRKİYENİN EN GÜVENİLİR BAHİS SİTESİNE HOŞ GELDİNİZ DETAYLI BİLGİ İÇİN CANLI DESTEK EKİBİMİZDEN HER SAAT HİZMET ALABİLSİNİZ
           </h4>
        </div>

        <div className='LiveChatContainerİcon'>
        <FontAwesomeIcon icon={faCoffee} className='icon' />
        </div>
    </div>
  )
}

export default LiveChat
