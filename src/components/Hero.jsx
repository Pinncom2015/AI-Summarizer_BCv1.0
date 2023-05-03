import BCLogo from '../assets/BC_Logo.svg';


const Hero = () => {
  return (
    // 100% width. Items will appear in a column and not a row in tailwind.css framework
    // ***button to portfolio link needs to written on line 10 in window.open('')***
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <img src={BCLogo} alt='BC_logo' className='w-28 object-contain' />
        <button type = 'button' onClick={( )=> window.open('https://github.com/Pinncom2015/AI-Summarizer_BCv1.0.git')} className='black_btn'>Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles Easily with <br className='max-md: hidden'></br>
        <span className='red_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      A revolutionary tool designed to make consuming information more efficient and enjoyable.
      </h2>
    </header>
  )
}

export default Hero