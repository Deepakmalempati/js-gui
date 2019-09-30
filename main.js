const ave = (x, y) => { return x / y}

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithave = async (event) => {
  document.querySelector('#result').innerHTML = ''
  
    
    const i = parseInt(document.querySelector('#student').value)
    const j = parseInt(document.querySelector('#sections').value)
    
    const ans = ` Average students per class are:  ${ave(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }




// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'student') ||
    (event.target && event.target.id === 'sections')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'calcaverage') { updateWithave(event) }
})


