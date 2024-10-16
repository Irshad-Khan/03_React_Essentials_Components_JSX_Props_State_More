// function CoreConcept(props) {
//     const image = props.image;
//     const title = props.title;
//     const description = props.description;
    
//   return (
//     <div>
//         <li>
//               <img src={ image} alt="" />
//               <h3>{title}</h3>
//               <p>{ description }</p>
//         </li>
//     </div>
//   )
// }

function CoreConcept({ image, title, description}) {
  return (
    <div>
        <li>
              <img src={ image} alt="" />
              <h3>{title}</h3>
              <p>{ description }</p>
        </li>
    </div>
  )
}

export default CoreConcept
