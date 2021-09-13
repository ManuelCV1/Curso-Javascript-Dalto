let roberto ;
let pedro;
let cofla;

const palitoDeheladoDeAgua = 0.6;
const palitoDeheladoDeCrema = 1;
const bombonHeladoMarcaHeladix = 1.6;
const bombonHeladoMarcaHeladovich = 1.7;
const bombonHeladoMarcaHelardo = 1.8;
const potecitoDeHeladoConConfites = 2.9; 
const poteDeCuartoDeKilo = 2.9;

roberto = prompt('¿Cuanto dinero tienes Roberto?');

if (roberto >= 0.6 && roberto < 1 ){
    alert(`Tienes $${roberto} USD , Puedes Comprar una Palito de Helado de Agua, (Cuesta $${palitoDeheladoDeAgua} USD)`);
}

else if (roberto >= 1 && roberto < 1.6 ){
    alert(`Tienes $${roberto} USD , Puedes Comprar una Palito de Helado de Crema, (Cuesta $${palitoDeheladoDeCrema} USD)`);
}

else if (roberto >= 1.6 && roberto < 1.7 ){
    alert(`Tienes $${roberto} USD , Puedes Comprar un Bombon Helado marca Heladix, (Cuesta $${bombonHeladoMarcaHeladix} USD)`);
}

else if (roberto >= 1.7 && roberto < 1.8 ){
    alert(`Tienes $${roberto} USD , Puedes Comprar un Bombon Helado marca Heladovich, (Cuesta $${bombonHeladoMarcaHeladovich} USD)`);
}

else if (roberto >= 1.8 && roberto < 2.9 ){
    alert(`Tienes $${roberto} USD , Puedes Comprar un Bombon Helado marca Helardo, (Cuesta $${bombonHeladoMarcaHelardo} USD)`);
}

else if (roberto >= 2.9){
    alert(`Tienes $${roberto} USD , Puedes Comprar un potecito de helado con confites ó un pote de 1/4 Kg, (Ambos Cuestan $${poteDeCuartoDeKilo} USD)`);
}

else {
    alert('No tienes suficiente dinero para comprar');
}




pedro = prompt('¿Cuanto dinero tienes Pedro?');


if (pedro >= 0.6 && pedro < 1 ){
    alert(`Tienes $${pedro} USD , Puedes Comprar una Palito de Helado de Agua, (Cuesta $${palitoDeheladoDeAgua} USD)`);
}

else if (pedro >= 1 && pedro < 1.6 ){
    alert(`Tienes $${pedro} USD , Puedes Comprar una Palito de Helado de Crema, (Cuesta $${palitoDeheladoDeCrema} USD)`);
}

else if (pedro >= 1.6 && pedro < 1.7 ){
    alert(`Tienes $${pedro} USD , Puedes Comprar un Bombon Helado marca Heladix, (Cuesta $${bombonHeladoMarcaHeladix} USD)`);
}

else if (pedro >= 1.7 && pedro < 1.8 ){
    alert(`Tienes $${pedro} USD , Puedes Comprar un Bombon Helado marca Heladovich, (Cuesta $${bombonHeladoMarcaHeladovich} USD)`);
}

else if (pedro >= 1.8 && pedro < 2.9 ){
    alert(`Tienes $${pedro} USD , Puedes Comprar un Bombon Helado marca Helardo, (Cuesta $${bombonHeladoMarcaHelardo} USD)`);
}

else if (pedro >= 2.9){
    alert(`Tienes $${pedro} USD , Puedes Comprar un potecito de helado con confites ó un pote de 1/4 Kg, (Ambos Cuestan $${poteDeCuartoDeKilo} USD)`);
}

else {
    alert('No tienes suficiente dinero para comprar');
}


cofla = prompt('¿Cuanto dinero tienes Cofla?');

if (cofla >= 0.6 && cofla < 1 ){
    alert(`Tienes $${cofla} USD , Puedes Comprar una Palito de Helado de Agua, (Cuesta $${palitoDeheladoDeAgua} USD)`);
    alert(`Cofa tu vuelto es $${cofla - palitoDeheladoDeAgua} USD`);
}

else if (cofla >= 1 && cofla < 1.6 ){
    alert(`Tienes $${cofla} USD , Puedes Comprar una Palito de Helado de Crema, (Cuesta $${palitoDeheladoDeCrema} USD)`);
    alert(`Cofla tu vuelto es $${cofla - palitoDeheladoDeCrema} USD`);
}

else if (cofla >= 1.6 && cofla < 1.7 ){
    alert(`Tienes $${cofla} USD , Puedes Comprar un Bombon Helado marca Heladix, (Cuesta $${bombonHeladoMarcaHeladix} USD)`);
    alert(`Cofla tu vuelto es $${cofla - bombonHeladoMarcaHeladix} USD`);
}

else if (cofla >= 1.7 && cofla < 1.8 ){
    alert(`Tienes $${cofla} USD , Puedes Comprar un Bombon Helado marca Heladovich, (Cuesta $${bombonHeladoMarcaHeladovich} USD)`);
    alert(`Cofla tu vuelto es $${cofla - bombonHeladoMarcaHeladovich} USD`);
}

else if (cofla >= 1.8 && cofla < 2.9 ){
    alert(`Tienes $${cofla} USD , Puedes Comprar un Bombon Helado marca Helardo, (Cuesta $${bombonHeladoMarcaHelardo} USD)`);
    alert(`Cofla tu vuelto es $${cofla - bombonHeladoMarcaHelardo} USD`);
}

else if (cofla >= 2.9){
    alert(`Tienes $${cofla} USD , Puedes Comprar un potecito de helado con confites ó un pote de 1/4 Kg, (Ambos Cuestan $${poteDeCuartoDeKilo} USD)`);
    alert(`Cofla tu vuelto es $${cofla - poteDeCuartoDeKilo} USD`);
}

else {
    alert('No tienes suficiente dinero para comprar');
}
