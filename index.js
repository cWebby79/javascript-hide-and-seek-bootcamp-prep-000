function getFirstSelector(selector) {
  var ele = document.querySelector(selector);
  return ele;
}

function nestedTarget() {
  var ele = document.querySelector('#nested div.target');
  return ele;
}

function increaseRankBy(n) {
  var ele = document.querySelectorAll('.ranked-list').document.querySelectorAll('li');
  for (let i = 0; i < ele.length; i++) {
    ele[i].innerHTML = (i + 1);
    
  }
}