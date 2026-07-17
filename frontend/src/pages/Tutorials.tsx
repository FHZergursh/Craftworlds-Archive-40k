import React from 'react'
import { Link } from 'react-router'

const Tutorials = () => {
  return (
    <div>
      <div >
        <div>Useful resources: 
          <div>list here</div>
        </div>

        <div>Beginner guides:
          <Link to={"/blogs"} className='text-blue-300'>Blogs</Link>
          <div>This should eventually be a list of blogs that have beginner information that it automatically opens</div>
        </div>
      </div>

    </div>
  )
}

export default Tutorials