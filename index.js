function getFirstSelector(selector) {
  var ele = document.querySelector(selector);
  return ele;
}

function nestedTarget() {
  var ele = document.querySelector('#id.target');
  return ele;
}