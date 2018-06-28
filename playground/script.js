document.addEventListener('DOMContentLoaded', function () {
  // const header = document.querySelector('.header')
  // console.log(header.innerText)

  // var items = document.querySelectorAll('.item')
  // items.forEach(function (item) {
  //   console.log(item.innerText)
  // })

  // var items = document.querySelectorAll('.item')
  // items.forEach(function (item) {
  //   item.classList.add('red')
  // })

  var header = document.querySelector('.header')
  header.addEventListener('click', toggleRed)

  var items = document.querySelectorAll('.item')
  items.forEach(function (item) {
    item.addEventListener('mouseover', addRed)
    item.addEventListener('mouseout', removeRed)
  })
})

function toggleRed (event) {
  var list = event.target.classList
  if (list.contains('red')) {
    list.remove('red')
  } else {
    list.add('red')
  }
}

function addRed (event) {
  event.target.classList.add('red')
}

function removeRed (event) {
  event.target.classList.remove('red')
}
