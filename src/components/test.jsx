import React from "react";

function test() {
  return (
    <div>
      <h2>test1</h2>
      <p>test2</p>
    </div>
  );
}

export default test;

// 1.Main limitation of JSX is we can only return one 'Root' element is return(); It gives us Parsing error as well.

//   return (

//     <div>test</div>

//     <div>test</div>

//   )

// }

// 2.To solve this we can use <div> </div> as main "Root" element and wrap our other root elements inside it.

// 			ex:

// 				  return (

//     					<div>

//       						<h2>test1</h2>

//     						<p>test2</p>

//     					</div>

// 					).

// 3.But this will create an extra div on UI which can effect our styling in complex application this extra <div></div> wrapper called '<div> Soup'

// Ex: here we have to use an unnecessary <div>

//  return (

//     					<div>

//       						<h2>test1</h2>

//     						<p>test2</p>

//     					</div>

// 					)

// 4.Wrapper component: It is a customs comp which return the child where it is used as Wrapper. And we just used it in place of <div>.

// 5.Custom wrapper component adds an extra element in the DOM depends on how it's implemented.

// 6.React fragment is just like a custom Wrapper comp, and does not create any Extra element to DOM.

// ex: return (

//     					<>

//       						<h2>test1</h2>

//     						<p>test2</p>

//     					</>

// 					)
