import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dribbble from '../assets/dribbble-logo.png';
import card1 from '../assets/13827111.png';
import card2 from '../assets/13827222.png';
import card3 from '../assets/13827333.png';

const DescribeYourself = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter(id => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  const handleFinish = () => {
    if (selectedCards.length > 0) {
      navigate('/verifyuseremai');
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Go back one step using browser history
  };

  return (
    <div className='container mx-auto flex flex-col gap-16'>
      <div className='p-4'>
        <img src={dribbble} alt="" className='h-[30px] w-[60]' />
      </div>
      <div className='mx-auto flex flex-col items-center'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-2 flex-shrink-0 block mx-auto'>What brings to you Dribbble?</h2>
        <p className='text-gray-400 text-sm'>Select the option that best describes you. Don't worry, you can explore other options later.</p>
      </div>
      <div className="mx-auto p-6">
        <div className="flex justify-center items-center gap-8 mx-6 flex-wrap" >
          <div className="flex-1 p-8 cursor-pointer border1 rounded-md flex flex-col justify-between h-[360px]" onClick={() => handleCardClick(1)}>
            <div className='hover-scale-140:hover hover-scale-140'>
              <img src={card1} alt="Card Image" className="h-40 w-full object-cover" />
            </div>
            <div>
              <p className='text-xl font-semibold text-gray-800 mb-2'>I'm a designer looking to share my work</p>
              <input
                type="checkbox"
                id="card1"
                name="selectedCards"
                value="1"
                checked={selectedCards.includes(1)}
                onChange={() => handleCardClick(1)}
              />
            </div>
          </div>
          <div className="flex-1 p-8 cursor-pointer border1 rounded-md flex flex-col justify-between  h-[360px]" onClick={() => handleCardClick(2)}>
            <div className='hover-scale-140:hover hover-scale-140 '>
              <img src={card2} alt="Card Image" className="h-40 w-full object-cover" />
            </div>
            <div>
              <p className='text-xl font-semibold text-gray-800 mb-2'>I'm looking to hire a designer</p>
              <input
                type="checkbox"
                id="card2"
                name="selectedCards"
                value="2"
                checked={selectedCards.includes(2)}
                onChange={() => handleCardClick(2)}
              />
            </div>
          </div>
          <div className="flex-1 p-8 cursor-pointer border1 rounded-md flex flex-col justify-between  h-[360px]" onClick={() => handleCardClick(3)}>
            <div className='hover-scale-140:hover hover-scale-140'>
              <img src={card3} alt="Card Image" className="h-40 w-full object-cover" />
            </div>
            <div>
              <p className='text-xl font-semibold text-gray-800 mb-2'>I'm looking for design inspiration</p>
              <input
                type="checkbox"
                id="card3"
                name="selectedCards"
                value="3"
                checked={selectedCards.includes(3)}
                onChange={() => handleCardClick(3)}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center items-center flex-col">
          
          <button
            onClick={handleFinish}
            disabled={selectedCards.length === 0}
            className={`px-4 py-2 bg-pink-500 text-white font-semibold rounded ${
              selectedCards.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Finish
          </button>
          <button 
                onClick={handleGoBack} 
                className="ml-2  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium
               rounded-md text-gray-400"
              >
                or press to <span>Return</span>
              </button>
        </div>
      </div>
    </div>
  );
};

export default DescribeYourself;
