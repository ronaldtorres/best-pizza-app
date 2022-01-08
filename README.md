# Best pizza app

Marketplace de pizzas con inicio de sessión, listado de tiendas y vista de detalles de una tienda.

## ¿Cómo ejecutar?

Clonar el repositorio y en el directorio del proyecto ejecutar:

```
npm install
```

Luego ejecutar el comando:

```
npm run serve
```

En el navegador abrir la url:

```
http://localhost:8080/
```

## Decisiones Técnicas

- Usé Vue 3. Normalmente trabajaba con Vue 2 y esta es la primera vez que uso Vue 3 y Compostion API en un proyecto, así que me sirvió mucho este ejercicio para aprender.

- Usé SCSS para simplificar estilos anidados y demás.

- Usé Tailwind CSS porque este diseño requería muchos elementos personalizados, por eso no se me hizo necesario usar una librería basada en componentes. Aproveché entonces así la flexibilidad de Tailwind con los estilos, tanto de forma inline como aplicados por scss con `@apply`.

- No usé VueX ya que no era necesario la centralización de datos ni compartirlos de forma anidada entre componentes.

- Usé Lazyload para conseguir una carga optimizada de la mayoría de imágenes y también animé su carga con un fade.

- Por motivos de simplicidad para este ejercicio usé localStorage para simular la sesión guardada del usuario.

### Otras notas

- Tiempo apoximado de ejecución del proyecto 22.5 horas.

- Traté de fidelizarme lo más posible al diseño sin tener medidas exactas de los elementos. Teniendo en cuenta cosas como: el login que no está centrado y otros detalles.


## Pendiente por añadir (Punto personal)

- Pruebas unitarias
