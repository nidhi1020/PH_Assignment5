1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

→
getElementById:
    *it selects a single element using an id
    *it returns a dom element
syntax:
    const i=document.getElementById('id')


getElementsByClassName:
    *selects all elements using a class name
    *returns HTML collection
syntax:
    const i=document.getElementByClassName('item')


querySelector:
    *returns first element which matches css selector
    *it returns single dom element or it can also return null
syntax:
    const i1=document.querySelector('.item') --by class
    const i2=document.querySelector('#item') --by id


querySelectorAll:
    *returns all element which matches css selector
    *returns node list
syntax:
    const i=document.querySelector('.item')



2.How do you create and insert a new element into the DOM?

i.create a new element 
const newElement=document.createElement('div')
ii.add attributes(.classList,.textContent etc)
newElement.classList.add('box)
iii.insert into dom(appendChild(),before(),after()etc)
document.body.appendChild(newElement)



3.What is Event Bubbling and how does it work?

it is a process thatan event starts from the target element and then bubbles up through its parent elements until it reaches the document



4.What is Event Delegation in JavaScript? Why is it useful?

it is a thechnique in js where we attach a single add event listerner to a parent element to handle events on its child elements using event bubbling 

it is useful because--
effeciency,dynamic elements,clenear mode


5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault():it stops broweser default behavior for an event,does not stop event bubbling

stopPropagation():it stop event from bubbling,does not stop default behavior