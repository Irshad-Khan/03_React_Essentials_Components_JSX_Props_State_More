import headerImage from '../../assets/react-core-concepts.png'

const reactDecriptions = ['Fundamentals', 'Crucial', 'Core'];

function genRendomInt(max) {
  return Math.floor(Math.random() * (max+1));
}
function Header() {
  const description = reactDecriptions[genRendomInt(2)];
  return (
    <div>
          <header>
        <img src={headerImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          { description  } React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>  
    </div>
  )
}

export default Header;