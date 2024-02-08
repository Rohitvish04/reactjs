function customRender(reactElement,container)
{
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.traget)

     maincontainer.appendChild(domElement) */

     const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for (const prop in reactElement.props) {
           if(prop ==='children') continue;
            domElement.setAttribute(prop, reactElement.props[prop])
        }
        container.appendChild(domElement)
     } 


const reactElement = {
    type : 'a',
    props:{
        href:'https://google.com',
        traget: '_blank'
    },
    children : 'Click me to Visit google'
}

const maincontainer = document.querySelector('#root')

customRender(reactElement, maincontainer);