function produceDrivingRange(blockRange){
  return function(start, finish){
    let distance = parseInt(finish) - parseInt(start);
    return distance <= blockRange ? `within range by ${blockRange - distance}` : `${distance - blockRange} blocks out of range`;
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return tip * fare;
  }
}
