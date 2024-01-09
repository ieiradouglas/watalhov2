import { useState } from 'react'

import logoWhatsapp from '../src/assets/logo-whatsapp.svg'

import logoDev from '../src/assets/dev-icon.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [numero, setNumero] = useState('')

  const notify = () => toast.warn('Número de telefone inválido!', {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });


  const handleButtonClick = () => {
    if (numero.length < 11 || numero.length == 0) {
      notify()
    } else {
      if (numero) {
        window.open(`https://wa.me/+55${numero}`, '_blank');
      }
    }

  };


  return (
    <>
      <main className="font-sans h-screen bg-[#13315C]  flex flex-col justify-center items-center">
        <header className="flex items-center gap-8">
          <div className="">
            <img src={logoWhatsapp} alt="logo do whatsapp" />
          </div>
          <div className="font-bold text-5xl text-[#fff]">
            Watalho
          </div>
        </header>
        <main className="flex flex-col items-center gap-3 mt-11 mb-11">
          <div className="text-2xl text-[#fff]">Digite o número:</div>
          <div className="flex gap-5">
            <div className="text-base">
              <input className="w-14 h-10 p-3" type="text" value="+55" disabled />
            </div>
            <div className="">
              <input className="w-70 h-10 p-3" type="text" placeholder="22999999999" onKeyUp={(e) => setNumero(e.target.value)} />
            </div>
          </div>
          <button className="bg-white p-4 rounded-lg w-40 mt-6" onClick={() => handleButtonClick()}>Conversar</button>
        </main>
        <footer className="absolute bottom-0   text-white text-base">
          <div className="flex justify-center items-center gap-3 w-full h-20">
            <img src={logoDev} alt="Janela de Desenvolvimento" width="38px" />
            <h3>Douglas Vieira da Silva</h3>
            <span className="animate-bounce h-5">|</span>
          </div>
        </footer>
      </main>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
