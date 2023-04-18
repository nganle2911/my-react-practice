// import React, { Component } from 'react'

// export default class Home extends Component {
//   render() {
//     return (
//       <div>Home</div>
//     )
//   }
// }

import React from 'react'
import useRoute from '../../Hook/UseRoute/useRoute'

const Home = () => {

  const {params, navigate, searchParams} = useRoute(); 

  console.log(params);
  console.log(navigate);
  console.log(searchParams); 

  return (
    <div>Home</div>
  )
}

export default Home
