function textAreaOverWin() {
    // Crear el nuevo div
    var overlayDiv = document.createElement('div');
    overlayDiv.id = 'overlayDiv';

    // Establecer estilos CSS para el div
    overlayDiv.style.position = 'fixed';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.width = '100%';
    overlayDiv.style.height = '100%';
    overlayDiv.style.background = 'rgba(0, 0, 0, 0.5)'; // Fondo semitransparente
    overlayDiv.style.zIndex = '9999'; // Asegurarse de que el div esté por encima de todo
    overlayDiv.style.opacity = '0'; // Establecer la opacidad inicial en 0 para que sea invisible

    // Agregar el div al cuerpo del documento
    document.body.appendChild(overlayDiv);

    // Centrar el div
    overlayDiv.style.display = 'flex';
    overlayDiv.style.alignItems = 'center';
    overlayDiv.style.justifyContent = 'center';

    // Animación de entrada suave
    overlayDiv.style.animation = 'fadeIn 1s forwards';

    // Código adicional para añadir contenido al div
    var contentDiv = document.createElement('div');
    contentDiv.id = 'contentDivWin';
    if (document.body.classList.contains("dark")) {
        contentDiv.style.backgroundColor = '#333642';
        contentDiv.style.color ='white';
      }else{
        contentDiv.style.backgroundColor = 'white';
        contentDiv.style.color ='black';
      }
      
    var contentText = document.createElement('p');
    contentText.innerHTML = '¡Enhorabuena!, le has ganado a la IA, ¿Te ves capaz de volver a ganarle? Prueba! <br>';
    contentDiv.appendChild(contentText);

    // Crear el botón verde
    var button = document.createElement('button');
    button.classList.add('btn', 'btn-success');
    button.textContent = 'Volver a jugar';

 

    // Agregar un controlador de eventos al botón
    button.addEventListener('click', function () {
        // Obtener el estado actual del modo oscuro
        const isDarkMode = document.body.classList.contains("dark");

        // Guardar el estado del modo oscuro en el almacenamiento local
        localStorage.setItem("darkMode", isDarkMode);
        location.reload(); // Recargar la página
    });

    // Añadir el contenido al div superpuesto
    contentDiv.appendChild(button);
    overlayDiv.appendChild(contentDiv);

}