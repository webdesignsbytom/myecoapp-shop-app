import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Sales1 from '../../assets/images/sales/sales1.png';
import Sales2 from '../../assets/images/sales/sales2.png';
import Sales3 from '../../assets/images/sales/sales3.png';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/');
  }, []);

  const navigateToPage = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    navigate(`${id}`);
  };

  return (
    <div className='grid font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full p-1 items-center justify-center'>
        <section>
          <div className='grid text-center outline outline-2 outline-black rounded-xl bg-main-colour px-6 py-8'>
            <article className=''>
              <div className='text-white'>
                <h2 className='text-xl font-semibold'>Welcome To</h2>
                <h1 className='text-3xl font-poppins font-bold'>MYECOSHOP</h1>
              </div>
              <div>
                <h3>Proudly sponsored by Cat App</h3>
              </div>
            </article>
          </div>
        </section>

        <section className='text-center'>
          <h4 className='text-xl'>Coming really soon!</h4>
        </section>
        <section>
          <div className='grid grid-cols-3 gap-4'>
            <div>
              <img src={Sales1} alt='' className='w-[500px]' />
            </div>
            <div>
              <img src={Sales2} alt='' className='w-[500px]' />
            </div>
            <div>
              <img src={Sales3} alt='' className='w-[500px]' />
            </div>
          </div>
        </section>

        <section className='grid grid-cols-3 gap-2 justify-center items-center w-fit mx-auto'>
          <div>
            <button className='border-solid border-2 border-main-colour px-6 py-2 text-black hover:brightness-105 rounded-lg text-xl '>
              Shop Now
            </button>
          </div>
          <div>
            <button className='bg-main-colour px-6 py-2 text-white hover:brightness-105 rounded-lg text-xl '>
              Learn More
            </button>
          </div>
          <div>
            <button className='bg-main-colour px-6 py-2 text-white hover:brightness-105 rounded-lg text-xl '>
              Sign Up
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
