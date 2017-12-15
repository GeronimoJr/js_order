var productOne = document.getElementById('productone'),
    productTwo = document.getElementById('producttwo'),
    productThree = document.getElementById('productthree');

productOne.addEventListener('click', function() { getInput('productone') });
productTwo.addEventListener('click', function() { getInput('producttwo') });
productThree.addEventListener('click', function() { getInput('productthree') });

var inputOne = document.getElementById('inputone'),
    inputTwo = document.getElementById('inputtwo'),
    inputThree = document.getElementById('inputthree');

var orderOne = document.getElementById('orderone'),
    orderTwo = document.getElementById('ordertwo'),
    orderThree = document.getElementById('orderthree');

orderOne.addEventListener('click', function() { getQty('qtyone') });
orderTwo.addEventListener('click', function() { getQty('qtytwo') });
orderThree.addEventListener('click', function() { getQty('qtythree') });

var sendOrder = document.getElementById('sendorder');

var buttonSend = document.getElementById('buttonsend');

buttonSend.addEventListener('click', function() { complete() });

var resultOne = document.getElementById('resultone');
    resultTwo = document.getElementById('resulttwo');
    resultThree = document.getElementById('resultthree');

var orderType = [0, 0],
    orderSize = [0, 0];

function getInput(product) {
  switch(product) {
    case 'productone':
    console.log('jeden');
    inputOne.style.display = 'block';
    orderType.splice(0, 1, 5);
    console.log(orderType);
    break;
    case 'producttwo':
    console.log('dwa');
    inputTwo.style.display = 'block';
    orderType.splice(1, 1, 10);
    console.log(orderType);
    break;
    case 'productthree':
    console.log('trzy');
    inputThree.style.display = 'block';
    orderType.splice(2, 1, 15);
    console.log(orderType);
  }
}

function getQty(qty) {
  switch(qty) {
    case 'qtyone':
    orderSize.splice(0, 1, document.getElementById('qtyone').value);
    console.log(orderSize);
    document.getElementById('info').style.display = 'none';
    sendOrder.style.display = 'block';
    calculate();
    sum();
    break;
    case 'qtytwo':
    orderSize.splice(1, 1, document.getElementById('qtytwo').value);
    console.log(orderSize);
    document.getElementById('info').style.display = 'none';
    sendOrder.style.display = 'block';
    calculate();
    sum();
    break;
    case 'qtythree':
    orderSize.splice(2, 1, document.getElementById('qtythree').value);
    console.log(orderSize);
    document.getElementById('info').style.display = 'none';
    sendOrder.style.display = 'block';
    calculate();
    sum();
  }
}

var result = [0, 0];

function calculate() {

  if(orderSize[0] > 0) {
    var k = orderSize[0] * orderType[0];
    result.splice(0, 1, k);
    resultOne.innerHTML = 'Produkt 1: ' + orderSize[0] + ' szt. za cenę: ' + result[0] + ' zł';
  } 
  if(orderSize[1] > 0) {
    var k = orderSize[1] * orderType[1];
    result.splice(1, 1, k);
    resultTwo.innerHTML = 'Produkt 2: ' + orderSize[1] + ' szt. za cenę: ' + result[1] + ' zł';
  } 
  if(orderSize[2] > 0) {
    var k = orderSize[2] * orderType[2];
    result.splice(2, 1, k);
    resultThree.innerHTML = 'Produkt 3: ' + orderSize[2] + ' szt. za cenę: ' + result[2] + ' zł';
  } 
}

var total = document.getElementById('suma');

function sum() {
  var suma = 0;
  for(var i = 0; i < result.length; i++) { 
  suma = suma + result[i]; 
}
console.log(suma);
total.innerHTML = 'Wartość zamówienia: ' + suma + ' zł';
}

function complete() {
  alert('Zamówienie wysłane. Dziękujemy!')
}