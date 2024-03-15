import React from 'react'
import './recentprojects.css';

export default function RecentProjects() {
  return (
    <section className="recentprojectsection">
      
      <div className='recentprojectheadingdiv'>
         <div className="rpheading">
            <h3>OUR RECENT PROJECTS</h3>
         </div> 
      </div>
      
      <div className="careerrow1">

        <div className="careercolumn1">
          <p className="careercolumnpara">AI</p>
        </div>

        <div className="careercolumn2">
          <p className="careercolumnpara">BLockchain</p>
        </div>

        <div className="careercolumn2">
          <p className="careercolumnpara">Programming & Tech</p>
        </div>
        
      </div>
    </section>  
  )
}
