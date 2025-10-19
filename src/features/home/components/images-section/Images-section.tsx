import React from 'react'
import './Images-section.scss'
import upImage from '../../../../assets/images/home/upper.jpg';
import middleImage from '../../../../assets/images/home/mddle.jpg';
import underImage from '../../../../assets/images/home/under.jpg';

function ImagesSection() {
  return (
    <div className='images-section'>
        <div className="left-section">
            <img src={upImage} alt="pharoah" className='upper-image'/>
            <img src={middleImage} alt="pharoah" className='middle-image'/>
            <img src={underImage} alt="pharoah" className='lower-image'/>
        </div>
        <div className="right-section">
            <h1>Is Osmosis right for my specialty?</h1>
            <p>
            Yes, anyone pursuing a career in medicine, nursing, or health care
            can benefit from our platform, which turns complex topics into
            easy-to-understand videos. We help users confidently learn and
            prepare for classroom lectures, clinical rotations, boards, and
            exams. We support you throughout your journey — from day one to
            patient one and beyond! 
            </p>
            <p>
            For the price of a textbook or two, Osmosis
            covers virtually every Is Osmosis right for my specialty? topic
            imaginable, on a single platform that you can access on your
            phone.
            </p>
        </div>
    </div>
  )
}

export default ImagesSection;