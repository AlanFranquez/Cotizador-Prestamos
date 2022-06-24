import React from 'react'

function Header({titulo, desc}) {
  return (
    <div>
        <h1>{titulo}</h1>
    </div>
  )
}

// function expression, la ventaja es que da por implcito el return
// const Header = () =>(  
//         <>
//             <h1>Hi</h1>
//         </>
// );

export default Header