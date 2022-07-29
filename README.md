# p5-dev 
https://docs.google.com/document/d/1nlSDaxowuLlZVusXEqkRwjf0btyYgQdNW8lJ_QVkGnE/edit?usp=sharing
# Configuración Inicial del Proyecto
Decidimos dividir el front y el back en este proyecto por temas de prolijidad, es por ello que cada uno tiene su pakage.json.
 De esta forma quienes quieran trabajar en alguna de las secciones no deben descargarse si o si todos los packetes de la otra sección.

# Informe Back
En el Back trabajaron Mariano, Tomás y Santino. 

# server
Primero en el archivo server.js se levanto el server del back, utilizando express. Se instaló morgan para el loggeo y nodemon para poder desarrollar con el sever levantado (se lo selecciono como herramienta para el "Start").
En la primera linea se requiere la DB para que esta misma se ejecute al levantarse el server, entonces la DB esta conectda con nuestra App.

# DB
Decidimos elegir Mongo Atlas como nuestra DB, por varios motivos:
 1. Es una tecnología nueva para nosotros y nos interesaba aprender como se utilizaba.
 2. Al ser una base de datos online nos ahorramos la tarea de crear una db en cada una de nuestros equipos.
 3. Al ser online también nos aseguramos de que la info que ella posea este sincronizada en todos los equipos.

Nuestra base se llama wowDB y su password es wow2022, este nombre y password son necesarios para el connectionString, que conecta nuestra app con la base de datos.
La base de datos se encuentra seedeada por 98 noticias, entre 9 y 10 de cada emoción. Ellas se encuentran en el archivo seed.js de utils, así como el método para seedear la base.
Las noticias fueron extraidas del siguiente url: https://ohlala-drupal-do.bd-it.com/data/search?keywords=<emotion>
OJO:Al momento de seedear la base necesitamos cambiar la configuración de la DB para que esta retorne mongoose al seed. Dicha configuración se encuentra comentada en la db.js

# Schema
Para nuestras noticias decidimos fijar un schema usando mongoose. Dicho modelo se puede ver en models/News.js. Estos son sus campos:

    {title:String,
    subtitle:String,
    field_credits:String,
    field_category:String,
    emotion:String,
    field_img_primary:String}

# Routes
El objetivo era cumplir con una condición: en un solo llamado se le debería pasar un numero n random de noticias por emoción al front. Para ello se recurre a un get api/
Definimos 10 emociones.  
     "Alegria",
    "Tristeza",
    "Misterio",
    "Reflexion",
    "Naturalleza",
    "Diversion",
    "Paz",
    "Amor",
    "Pasion",
    "Accion"

Cada emoción cuenta con 10 noticias en la base de datos.
De esas 10 emociones, se ordenan de forma random en un array y se envian tres de cada emoción al front. Siento un total de 30 noticias.
Lo a estructura en la cual devuelve esta ruta es un array de 10 indices (uno x cada emoción)
dentro de cada indice otro array enciierra tres objetos (uno x cada noticia).
Sería algo así [[{},{},{}],[],...]

Existe a su vez otra ruta que trae todas las emociones por si en algun momento no es necesaria. Y se resuelve llamando a get(api/newses).

# Informe Front revista Wow

El proyecto revista Wow es la visualización de parte del usuario común de la revista. Allí puede acceder a la vista individual de los artículos y al segmento interactivo “ ¿Cómo te sientes hoy? ” 

La página principal muestra diferentes artículos cuyo orden puede ser modificado desde el ABM por un usuario administrador. Cuando el usuario selecciona algún artículo se le redirige a la vista individual del mismo. La organización en la que se ve el artículo también puede ser modificada desde el ABM por un usuario administrador.   

Para inicializar la sección front-End debe ubicarse sobre la raíz del proyecto llamado 
p5-dev y correr los siguientes comandos  :

npm install
npm run dev

La totalidad del proyecto se llevó a cabo con Next.js, React y Chakra UI. Para ver el deploy del proyecto puede ingresar a https://p5-dev.vercel.app/ 

# Desafío UX/UI

Uno de los desafíos iniciales del proyecto consistía en crear un componente interactivo y llamativo para el usuario en donde al interactuar con el componente pudiera acceder a una noticia acorde a su estado de ánimo. Nosotros lo afrontamos como un desafío de clickbait. Así, luego de una lluvia de ideas decidimos crear un componente 3D con Three.js en donde se mostrará un sol en el centro con emociones que giraran a su alrededor. También se implementó un scroll al costado derecho de la pantalla que acompaña al usuario y que al ser clickeado lleva directamente al componente 3D.




Para el uso de Three.js en Next.js tuvimos que usar las siguientes librerías: 

   "@react-spring/three": "^9.4.5",
    "@react-three/drei": "^9.14.3",
    "@react-three/fiber": "^8.0.27",
     "three": "^0.141.0",
    "three-obj-loader": "^1.1.3",
    "three-orbitcontrols": "^2.110.3"




Al hacer click sobre el Sol del centro este se hace más grande, se puede mover el sistema de circunferencias a través de todo el componente y hacerlo grande o pequeño. Cuando el usuario selecciona una emoción se le redirecciona a un artículo random cuyo título incluya la palabra que corresponde a la emoción. Los artículos ya vienen pre renderizados y llegan al componente como props bajo el nombre de newses. La función que muestra el artículo de forma aleatoria es la siguiente y se lleva a cabo luego del click sobre la emoción:


 const handleClick = (e) => {




   const emotionSelected = e.object.model;


   const news = newses[emotionSelected][Math.floor(Math.random() * 3)];


   router.push(`/${news.emotion}/${news.url}`);


 };



La emoción seleccionada llega a través e.object.model. 



