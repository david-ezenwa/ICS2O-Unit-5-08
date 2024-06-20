// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function longDivision() {
  let dividend = parseInt(document.getElementById("dividend").value)
  let divisor = parseInt(document.getElementById("divisor").value)

  if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
    document.getElementById("answer").innerHTML = "Please enter valid numbers. Divisor cannot be zero."
    return
  }

  let quotient = 0
  let remainder = dividend
  let divisionSteps = ""

  while (remainder >= divisor) {
    remainder -= divisor
    quotient++
    divisionSteps += `${dividend} - ${divisor} = ${remainder} <br>`
  }

  document.getElementById("steps").innerHTML = divisionSteps
  document.getElementById("answer").innerHTML = `The result of ${dividend} / ${divisor} is ${quotient} with a remainder of ${remainder}`
}