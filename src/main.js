var thermostat = new Thermostat();
var currentTemp = thermostat.temperature;
document.getElementById('temperature').innerHTML = currentTemp;

function upTemp() {
  thermostat.increase();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
}

function downTemp() {
  thermostat.decrease();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
}

function togglePowerSaver() {
  thermostat.powerSaver = !thermostat.powerSaver;
}

function reset() {
  thermostat.resetTemp();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
}



//
// document.getElementById("button-up").onclick = upTemp;
