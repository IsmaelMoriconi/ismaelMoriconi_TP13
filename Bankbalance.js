function calculateBalances(operaciones) {
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    
    operaciones.forEach(operacion => {
      if (operacion > 0) {
        saldoDepositos += operacion;
      } else {
        saldoRetiros += operacion;
      }
    });
  
    let saldoFinal = saldoDepositos + saldoRetiros;
  
    return {
      saldoDepositos: saldoDepositos,
      saldoRetiros: saldoRetiros,
      saldoFinal: saldoFinal
    };
  }
  
  function bankBalance(nombre, apellido, operaciones) {
    const balances = calculateBalances(operaciones);
  
    return {
      nombre: nombre,
      apellido: apellido,
      saldoDepositos: balances.saldoDepositos,
      saldoRetiros: balances.saldoRetiros,
      saldoFinal: balances.saldoFinal
    };
  }
  
  let operacionesGloria = [5000, 1000, 500, -3000, -10000];

  let gloriaBalance = bankBalance("Gloria", "Medina", operacionesGloria);