# Best pizza app

Marketplace de pizzas con inicio de sessión y listado de tiendas.

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

- Usé Vue 3, con el fin de aprovechar el uso de Composition API. (Normalmente trabajaba con Vue 2 y esta es la primera vez que uso Vue 3 y compostion API en un proyecto, así que me sirvió mucho este ejercicio para aprender).

- SCSS para simplificar estilos anidados y demás.

- Tailwind css porque este diseño requería elemente personalizados, por eso no se me hizo necesario usar una librería basada en componentes.

- No consideré usé de VueX ya que no era necesario la centralización de datos ni compartirlos entre componentes.

- Usé Lazyload para conseguir una mejor carga optimizada de la mayoría de imágenes y también animar su carga con un fade.

### Otras notas

- Tiempo apoximado de ejecución del proyecto 22.5 horas.

- Traté de fidelizarme lo más posible al diseño sin tener medidas exactas de los elementos. Teniendo en cuenta cosas como: el login que no está centrado.


## Pendiente por añadir (Punto personal)

- Pruebas unitarias