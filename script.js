document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-danzas');
    
   
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Detener el envío por defecto para que no recargue la página
            event.preventDefault();

            const inputDanza = document.getElementById('nombre-danza');
            const listaDanzas = document.getElementById('lista-danzas');
            
            
            const nombreDanza = inputDanza.value.trim();

            if (nombreDanza !== "") {
             
                alert(`¡Se ha procesado exitosamente la danza: ${nombreDanza}!`);

            
                const nuevoItem = document.createElement('li');
                nuevoItem.textContent = nombreDanza;
                listaDanzas.appendChild(nuevoItem);

                
                inputDanza.value = "";
            }
        });
    }
});