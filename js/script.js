// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// Bonus: grafica a piacere!



//dichiariamo i valori età e km in formato numerico
var eta = parseInt(prompt('Inserisci la tua Età'));
var km = parseInt(prompt('Inserisci i Km'));

//dichiariamo il costo per km
var costoKm = 0.21;

//calcoliamo il costo del biglietto
var costoBiglietto = km * costoKm;


//Esempio 1

//dichiara tutte e tre le casistiche

//if (eta < 18) {
//  sconto = ((costoBiglietto * 20) / 100);
//  document.getElementById('prezzo').innerHTML += costoBiglietto - sconto + ' ' + '(sconto minorenne applicato)'
//} 
//  else if (eta >= 65) { 
//  sconto = ((costoBiglietto * 40) / 100);
//  document.getElementById('prezzo').innerHTML += costoBiglietto - sconto + ' ' + 'sconto over65 applicato'
//  }
//  else {
//    document.getElementById('prezzo').innerHTML += costoBiglietto + ' ' + ' nessuno sconto applicato '
//  }





//Esempio 2

//dichiara 2 casistiche in modo che la terza sia vista solo nel caso in cui nessuna di tutte e due sia vera


//questa è la variabile che viene visualizzata prima di tutto e che rimane valida nel caso in cui non rientri nelle casistiche di sotto
prezzo = costoBiglietto;
messaggio = '(nessuno sconto applicato)';

//con cliente minorenne
if (eta < 18) {
  prezzo -= ((costoBiglietto * 20) / 100) ;
  prezzo = prezzo.toFixed(2);
  messaggio = '(sconto minorenne applicato)';

} 
//con cliente over65
else if (eta >= 65) {
  prezzo -= ((costoBiglietto * 40) / 100);
  prezzo = prezzo.toFixed(2);
  messaggio = '(sconto over65 applicato)';
}

//stampa

document.getElementById('prezzo').innerHTML += prezzo + '€' + ' ' + messaggio;