function getFirstSelector(selector) {
  var ele = document.querySelector(selector);
  return ele;
}

function nestedTarget() {
  var ele = document.querySelector('#nested div.target');
  return ele;
}

function increaseRankBy(n) {
  var ele = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ele.length; i++) {
    ele[i].innerHTML = parseInt(ele[i].innerHTML + n);
    }
}

function deepestChild() {
  
}