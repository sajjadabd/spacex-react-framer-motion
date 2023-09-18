import React from 'react'

const SectionTwo = () => {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-2 gap-4 ">
      {/* Row 1, Column 1 */}
      <div className="p-4 h-full">
        <h3 className='pb-4'>STARLINK MISSION</h3>
        <p>On Friday, March 24 at 11:33 a.m. ET, 
          Falcon 9 launched 56 Starlink satellites to 
          low-Earth orbit from Space Launch 
          Complex 40 at Cope Canaveral Space 
          Force Station, Florida
        </p>
      </div>

      {/* Row 1, Column 2 */}
      <div className=" p-4 h-full"></div>

      {/* Row 1, Column 3 */}
      <div className=" p-4 h-full"></div>

      {/* Row 2, Column 1 */}
      <div className=" p-4 h-full"></div>

      {/* Row 2, Column 2 */}
      <div className=" p-4 h-full"></div>

      {/* Row 2, Column 3 */}
      <div className=" p-4 h-full">
        <p>
        This was the tenth launch and landing 
        for this Falcon 9 first stage booster, 
        which previously launched CRS-22, Crew-3, 
        Turksat 5B, Crew-4, CRS-25, Eutelsat 
        HOTBIRD 13G, mPOWER-a and now three Starlink missions.
        </p>
        <h3 className='pt-4'>READ MORE</h3>
      </div>
    </div>
  )
}

export default SectionTwo