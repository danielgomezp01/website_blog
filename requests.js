// requests.js

window.onload = function() {
    fetch('datos.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(data => {
        // Actualiza el nombre
        document.getElementById('name').textContent = `Hola, mi nombre es ${data.nombre}`;

        // Actualiza la biografia
        document.getElementById('biografia').textContent = `Biografía: ${data.biografia}`;
  
        // Actualiza los enlaces de redes sociales
        document.getElementById('facebookLink').href = data.enlaces.facebook;
        document.getElementById('xUser').href = data.enlaces.x;
        document.getElementById('AzureUser').href = data.enlaces.azure;
        document.getElementById('githubUser').href = data.enlaces.github;
  
        // Actualiza el enlace al blog
        document.getElementById('website').href = data.enlaces.website;
  
        // Actualiza el autor
        document.getElementById('author').textContent = `2025 - Hecho por ${data.nombre}`;
      })
      .catch(error => {
        console.error('Hubo un problema con la carga del JSON:', error);
      });
  };
  
  