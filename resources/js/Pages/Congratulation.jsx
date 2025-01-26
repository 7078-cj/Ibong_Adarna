import React from 'react'

function Congratulation() {
  return (
    <div className="credit-container">
    <div className="crawl">
      <h1 className="crawl-title">Credits</h1>
      <div className="crawl-content">
        <p>Directed by: John Doe</p>
        <p>Produced by: Jane Smith</p>
        <p>Starring:</p>
        <p>Actor One</p>
        <p>Actor Two</p>
        <p>Actor Three</p>
        <p>Music by: Composer Name</p>
        <p>Visual Effects by: VFX Studio</p>
        <p>And many more...</p>
        <p>May the Force be with you!</p>
        <a href="/">
                            <button className="cursor-pointer uppercase bg-white bg-opacity-5 rounded-lg px-10 py-2 text-slate-300 text-5xl active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                                home
                            </button>
                        </a>
      </div>
    </div>
    <div className="stars"></div>
  </div>
  )
}

export default Congratulation