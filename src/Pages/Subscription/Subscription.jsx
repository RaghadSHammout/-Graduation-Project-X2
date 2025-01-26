import React from 'react'
import Plans from '../../Components/Plans/Plans'
import ComparePlansTable from '../../Components/ComparePlansTable/ComparePlansTable'
// import CastCarousel from '../../Components/CastCarousel/CastCarousel';
// import { ShowActorsImages } from '../../Components/Data/ShowsActorsImages';
export default function Subscription() {
  return (
    <>
      <Plans
      addPlans= {false} />
      <ComparePlansTable />
      {/* <CastCarousel CastImages={ShowActorsImages} lunaPad={true} /> */}
    </>
  );
}
