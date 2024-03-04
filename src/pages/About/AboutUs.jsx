import React from 'react';
import Top from '../../components/Top/Top';
import OverView from '../../components/Overview/OverView';
import Counter from '../../components/Counter/Counter';
import Mission from '../../components/Mission/Mission';

export default function AboutUs() {
  return (
    <section>
        <Top heading={"about us"}/>
        <OverView/>
        <Counter/>
        <Mission/>
    </section>
  )
}
