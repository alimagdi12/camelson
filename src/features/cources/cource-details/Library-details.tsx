import React from 'react'
import './Library-details.scss'
import CategoryCard from '../../../shared/components/card/Card';
import cardImg from '../../../assets/images/library/card.jpg'
function LibraryDetails() {
  const courses: string[] = [
      "The lecture (1)",
      "The lecture (2)",
      "The lecture (3)",
      "The lecture (4)",
      "The lecture (5)",
      "The lecture (6)",
      "The lecture (7)",
      "The lecture (8)",
      "The lecture (9)",
      "The lecture (10)",
    ];
    const handleCardClick=()=>{
      console.log('hello');
      
    }
  return (
    <div className='library-details-container'>
      <div className="library-details-content">
        {courses.map((category, index) => (
        <CategoryCard
          key={index}
          title={category}
          image={cardImg}
          onClick={handleCardClick}
        />
        ))}
      </div>
    </div>
  )
}

export default LibraryDetails;