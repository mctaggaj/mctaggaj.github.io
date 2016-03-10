angular.module("app").
  controller("iccid-creator", ["$scope", function ($scope) {
  // todo: convert to service
  // https://github.com/smh/checkdigit/blob/master/lib/mod10.js
  function isValid(input) {
    var checkDigitIndex = input.length - 1;
    return input.substr(checkDigitIndex) === create(input.substr(0, checkDigitIndex));
  }

  function apply(input) {
    return input + create(input);
  }

  function create(input) {
    var sum = 0;
    input.split('').reverse().forEach(function (value, index) {
      var weight = (index + 1) % 2 + 1;
      sum += digitSum(parseInt(value, 10) * weight);
    });
    var sumMod10 = sum % 10;
    if (sumMod10 === 0) {
      return '0';
    } else {
      return (10 - sumMod10) + '';
    }
  }

  function digitSum(number) {
    var sum = number > 9 ? 1 : 0;
    return sum + number % 10;
  }



  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  function createICCID() {
    var chars = "891111" + $scope.inputChars + pad(Math.round(Math.random() * 999999999999),12);
    chars = chars.substring(0,18);
    chars = apply(chars)
    $scope.output = chars;
    console.log(chars)
    return chars;
  }
  $scope.inputChars = "";
  $scope.create = createICCID;
  }
])