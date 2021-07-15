'use strict';

let bill = document.querySelector('.amount-input');
const tip5 = (document.querySelector('.tip5').value = 0.05);
const tip10 = (document.querySelector('.tip10').value = 0.1);
const tip15 = (document.querySelector('.tip15').value = 0.15);
const tip25 = (document.querySelector('.tip25').value = 0.25);
const tip50 = (document.querySelector('.tip50').value = 0.5);
let tipCustom = document.querySelector('.tipCustom');
let people = document.querySelector('.people-input');
let peopleTip = document.querySelector('.person-tip');
let peopleTotal = document.querySelector('.person-total');
const cannotBeZero = document.querySelector('.zero');
const moreThanZero = document.querySelector('.zero-hidden');

// Compute the bill/tip

document.querySelector('.tip5').addEventListener('click', function () {
  const t5 = function () {
    if (tip5 && people.value > 0) {
      const tip = bill.value * tip5;
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return t5();
});

document.querySelector('.tip10').addEventListener('click', function () {
  const t10 = function () {
    if (tip10 && people.value > 0) {
      const tip = bill.value * tip10;
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return t10();
});

document.querySelector('.tip15').addEventListener('click', function () {
  const t15 = function () {
    if (tip15 && people.value > 0) {
      const tip = bill.value * tip15;
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return t15();
});

document.querySelector('.tip25').addEventListener('click', function () {
  const t25 = function () {
    if (tip25 && people.value > 0) {
      const tip = bill.value * tip25;
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return t25();
});

document.querySelector('.tip50').addEventListener('click', function () {
  const t50 = function () {
    if (tip50 && people.value > 0) {
      const tip = bill.value * tip50;
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return t50();
});

document.querySelector('.tipCustom').addEventListener('click', function () {
  const tCustom = function () {
    if (tipCustom && people.value > 0) {
      const tip = bill.value * (tipCustom.value / 100);
      const singlePersonTip = tip / people.value;
      peopleTip.textContent = singlePersonTip.toFixed(2);
      const totalBillPerPerson = bill.value / people.value + singlePersonTip;
      peopleTotal.textContent = totalBillPerPerson.toFixed(2);
      cannotBeZero.classList.add('hidden');
      moreThanZero.classList.remove('zero-hidden');
    } else {
      cannotBeZero.classList.remove('hidden');
      moreThanZero.classList.add('zero-hidden');
    }
  };
  return tCustom();
});

document.querySelector('.btn-reset').addEventListener('click', function () {
  bill.value = '';
  tipCustom.value = '';
  people.value = '';
  peopleTip.textContent = '0.00';
  peopleTotal.textContent = '0.00';
});
