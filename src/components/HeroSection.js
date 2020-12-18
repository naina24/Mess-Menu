import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Student from './pages/Student';

function HeroSection()
 {
  return (
    <div className='hero-container'>
      <p>Sign-in as :</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          id='2'
        >
         Mess Member
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          id='1'
          onClick={Student}
        >
         Student <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
