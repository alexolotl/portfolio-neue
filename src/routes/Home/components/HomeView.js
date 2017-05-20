import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import World from './World'

export default class HomeView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.world = new World( this.threeRef );
  }
  render() {
    return (
      <div>
        <h1 className='name-title'><span>aez</span><span>under construction</span><span>aez</span><span>under construction</span><span>aez</span><span>under construction</span><span>aez</span></h1>
        {/*<img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />*/}
        <div ref={threeRef => this.threeRef = threeRef} className='fullscreen-shader'></div>
      </div>
    );
  }

}
