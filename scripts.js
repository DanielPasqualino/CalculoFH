function converterTemperatura() {
    const celsius = document.getElementById('celsius').value;
    const resultadoDiv = document.getElementById('resultado');

    if (celsius === "") {
        resultadoDiv.textContent = "Por favor, insira uma temperatura válida.";
        resultadoDiv.classList.remove('visible');
        resultadoDiv.classList.add('hidden');
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    resultadoDiv.textContent = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.classList.add('visible');
}
