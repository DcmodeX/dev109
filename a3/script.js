document.addEventListener('DOMContentLoaded', () => {
    const rhombusForm = document.getElementById('rhombusForm');
    const heightInput = document.getElementById('height');
    const oddColorSelect = document.getElementById('oddColor');
    const evenColorSelect = document.getElementById('evenColor');
    const symbolSelect = document.getElementById('symbol');
    const rhombusDisplay = document.getElementById('rhombusDisplay');

    // Function to create a single character span with color
    function createColoredChar(char, color) {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = color;
        return span;
    }

    // Function to generate a single line of the rhombus
    function generateRhombusLine(currentWidth, totalHeight, oddColor, evenColor, symbol, isTopHalf, charIsColoredSymbol) {
        let line = document.createElement('div'); 
        line.style.whiteSpace = 'pre';

        // Calculate leading spaces for centering
        const maxStars = totalHeight * 2 - 1;
        const currentStars = currentWidth * 2 - 1;
        const leadingSpaces = (maxStars - currentStars) / 2;

        for (let i = 0; i < leadingSpaces; i++) {
            line.appendChild(createColoredChar(charIsColoredSymbol ? symbol : ' ', 'white'));
        }

        for (let i = 0; i < currentStars; i++) {
            const color = (i % 2 === 0) ? oddColor : evenColor;
            line.appendChild(createColoredChar(symbol, color));
        }

        // Add trailing spaces symmetrically
        for (let i = 0; i < leadingSpaces; i++) {
             line.appendChild(createColoredChar(charIsColoredSymbol ? symbol : ' ', 'white'));
        }
        return line;
    }

    // Main function to generate the complete rhombus
    function generateRhombus(height, oddColor, evenColor, symbol) {
        rhombusDisplay.innerHTML = ''; 

        // Top-Left and Top-Right (Upper Half of the Rhombus - increasing width)
        for (let i = 1; i <= height; i++) {
            const line = generateRhombusLine(i, height, oddColor, evenColor, symbol, true, true);
            rhombusDisplay.appendChild(line);
        }

        for (let i = height - 1; i >= 1; i--) {
            const line = generateRhombusLine(i, height, oddColor, evenColor, symbol, false, true);
            rhombusDisplay.appendChild(line);
        }

        if (height === 0) {
             rhombusDisplay.textContent = 'Please enter a height greater than 0.';
        }
    }

    // Event listener for form submission
    rhombusForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        if (!rhombusForm.checkValidity()) {
            return;
        }

        const height = parseInt(heightInput.value);
        const oddColor = oddColorSelect.value;
        const evenColor = evenColorSelect.value;
        const symbol = symbolSelect.value;

        generateRhombus(height, oddColor, evenColor, symbol);
    });

    // Generate rhombus on initial load with default values
    generateRhombus(
        parseInt(heightInput.value),
        oddColorSelect.value,
        evenColorSelect.value,
        symbolSelect.value
    );
});
