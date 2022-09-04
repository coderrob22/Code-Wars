function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
  }

  or 

  const cockroachSpeed = s => Math.floor(s / 0.036);

  or

  function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }