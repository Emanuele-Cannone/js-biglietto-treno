// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// Bonus: grafica a piacere!



//dichiariamo i valori età e km in formato numerico
var eta = parseInt(prompt('Inserisci la tua Età'));
var km = parseInt(prompt('Inserisci i Km'));

//console.log(eta, km);


//dichiariamo il costo per km
var costoKm = 0.21;


//calcoliamo il costo del biglietto
var costoBiglietto = km * costoKm;
//console.log(costoBiglietto);




if (eta < 18) {
  sconto = ((costoBiglietto * 20) / 100);
  //console.log(costoBiglietto - sconto);
  document.getElementById('prezzo').innerHTML += costoBiglietto - sconto + ' ' + '(sconto minorenne applicato)'
} 
  else if (eta >= 65) { 
  sconto = ((costoBiglietto * 40) / 100);
  //console.log(costoBiglietto - sconto);
  document.getElementById('prezzo').innerHTML += costoBiglietto - sconto + ' ' + 'sconto ovre65 applicato'
  }
  else {
    document.getElementById('prezzo').innerHTML += costoBiglietto + ' ' + ' nessuno sconto applicato '
  }

