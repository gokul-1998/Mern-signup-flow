import React from 'react'

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>hello again</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
              Explare more by connecting with us
            </span>

          </div>
          <form className='py-1'>
            <div className="profile flex justify-center py-4">
                <img src="" alt="avatar" />
            </div>
            <div className="textbox">
                <input type="text" placeholder='Username' />
                <button type='submit'>Let's Go</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
