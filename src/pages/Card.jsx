import React, { useState } from 'react';
import Start from '../components/Start'
import Second from '../components/Second'
import Third from '../components/Third'
import Four from '../components/Four'
import Five from '../components/Five'
import Six from '../components/Six'

const Card = () => {
    const [currentPage, setCurrentPage] = useState('start'); 

    const handleNavigation = (nextPage) => {
      setCurrentPage(nextPage); 
    };
  

  return (
    <div>
    {currentPage === 'start' && (
        <Start onNavigate={() => handleNavigation('second')} />
    )}
    {currentPage === 'second' && (
        <Second onNavigate={() => handleNavigation('third')} />
    )}
    {currentPage === 'third' && (
        <Third onNavigate={() => handleNavigation('four')} />
    )}
    {currentPage === 'four' && (
        <Four onNavigate={() => handleNavigation('five')} />
    )}
    {currentPage === 'five' && (
        <Five onNavigate={() => handleNavigation('six')} />
    )}
    {currentPage === 'six' && (
        <Six onNavigate={() => handleNavigation('start')} /> 
    )}
</div>
  )
}

export default Card