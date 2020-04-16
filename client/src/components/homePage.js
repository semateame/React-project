import React from 'react';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img6 from './images/img6.jpg';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: img6,
    caption: `Himbol wire makes it easy to send money from the U.S. to friends or family in 
    the world. You can count on Himbol wire for reliable wire transfers in times that really 
    matter, like making sure regular support gets to your family or emergency funds are received
     by your friend in need. Plus, you choose the way that’s best for you to transfer your funds.',
    header: 'Send your money with us reliably`,
    header: 'Himbol Exchange Money',
    key: '1'
  },
  {
    src: img7,
    altText: 'slide 2',
    caption: `With Himbol wire, money transfers are reliable, fast and your loved ones can pick up
     at agent locations around the world or have funds deposited into their bank accounts.`,
    header: 'Send money from anywhere, to anywhere',
    key: '2'
  },
  {
    src: img8,
    altText: 'Slide 3',
    caption: `Himbol wire offers many send and receive options with money arriving in minutes.*`,
    header: 'Send money online with peace of mind',
    key: '3'
  }
];

const Home = () =><div>

 <UncontrolledCarousel items={items} />
 </div> ;

export default Home;