
import mock from '/mock.jpg'
import Icon from './components/Icon'

export function App() {
  return (
    <div className="h-svh flex">
      <div className="bg-slate-50 w-1/6 p-4">
        <div className="flex items-center gap-2">
          <img src={mock} alt="imagem de perfil" className='w-[35px] rounded-[4px]' />
          <h2 className='text-lg font-medium'>Eduarda</h2>
        </div>
        <button className="bg-black text-slate-50 font-medium px-2 py-1 w-full my-4 rounded">
          Escrever
        </button>
        <div className='rounded border-gray-400 border-solid border w-[100%] h-12 my-2 flex relative p-2 shadow-2xl'>
          <input
            type="text"
            placeholder='Pesquisar'
            className='w-[70%] bg-transparent outline-none'
          />
          <span className='bg-black rounded absolute right-2 top-2 p-1 font-bold text-slate-200'>
            Ctrl + F
          </span>
        </div>
        <h2 className='mt-10 font-semibold'>Meus Textos</h2>
          <ul className='mt-2'>
            <li className='my-2 cursor-pointer h-6 overflow-hidden hover:text-slate-500 font-medium flex items-center gap-2'>
              <Icon name="document-outline" />
              <p className='font-normal'>Proposta de Projeto</p>
            </li>
            <li className='my-2 cursor-pointer h-6 overflow-hidden hover:text-slate-500 font-medium flex items-center gap-2'>
              <Icon name="document-outline" />
              <p className='font-normal'>Proposta de Projeto</p>
            </li>
            <li className='my-2 cursor-pointer h-6 overflow-hidden hover:text-slate-500 font-medium flex items-center gap-2'>
              <Icon name="document-outline" />
              <p className='font-normal'>Proposta de Projeto</p>
            </li>
            <li className='my-2 cursor-pointer h-6 overflow-hidden hover:text-slate-500 font-medium flex items-center gap-2'>
              <Icon name="document-outline" />
              <p className='font-normal'>Proposta de Projeto</p>
            </li>
          </ul>
      </div>
      <div className="w-3/4 px-8">

      </div>
    </div>
  )
}


