import JsxImage from './assets/jsx-ui.png'
import StateImage from './assets/state-mgmt.png'
import ComponentImage from './assets/components.png'
import ConfigImage from './assets/config.png'

export const CORE_CONCEPT = [
    {
        image: ComponentImage,
        title: 'Components',
        description: 'Components are reusable building blocks in React'
    },
    {
        image: JsxImage,
        title: 'JSX',
        description: 'Return html code for components'
    },
    {
        image: ConfigImage,
        title: 'Props',
        description: 'Properties are use to configure components'
    },
    {
        image: StateImage,
        title: 'State',
        description: 'State is used to configure components with values'
    }
    
];

export const Examples = {
    components: {
        title: 'Components',
        description: 'Learn how to create and use reusable components in React',
        code: `function Welcome()
        {
        return <h1>Hello World</h1>
        }`
    },
    jsx: {
        title: 'JSX',
        description: 'Learn how to write JSX code in React',
        code: `
        <div>
            <h1>Hello {userName}</h1>
            <p>Time to learn react</p>
        </div>`
    },
    props: {
        title: 'Props',
        description: 'Learn how to pass properties to components',
        code: `
        function Welcome(props)
        {
            return <h1>Hello {props.name}</h1>
        }`
    },
    state: {
        title: 'State',
        description: 'Learn how to manage state in components',
        code: `class Counter extends React.Component 
        {
        constructor(props)
        {
            super(props);
            this.state={count:0}
        }
        render()
        {
            return 
                <div>
                    <h1>{this.state.count}</h1>
                    <button
                        onClick={()=>this.setState({count:this.state.count+1})}>
                        Increment
                    </button>
                </div>
        }
        }`
    }
};