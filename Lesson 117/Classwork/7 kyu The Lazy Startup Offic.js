function createRota(seatingPlan) {
    let rota = [];
    
    for (let i = 0; i < seatingPlan.length; i++) {
      if (i % 2 === 0) {
        rota = rota.concat(seatingPlan[i]);
      } else {
        rota = rota.concat(seatingPlan[i].reverse());
      }
    }
  
    return rota;
  }
  