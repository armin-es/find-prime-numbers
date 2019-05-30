const express = require('express');

const router = express.Router();

router.get('/:number', (req, res) => {
  let numbers = [];
  const primes = [];
  const maxNumber = req.params.number;

  const findMedian = (p) => {
    const l = p.length;
    return l % 2 === 0 ? [p[l / 2 - 1], p[l / 2]] : [p[(l - 1) / 2]];
  };

  for (let i = 2; i <= maxNumber; i += 1) {
    numbers.push(i);
  }

  while (numbers.length) {
    primes.push(numbers.shift());
    numbers = numbers.filter(i => i % primes[primes.length - 1] !== 0);
  }

  res.send(findMedian(primes));
});

module.exports = router;
