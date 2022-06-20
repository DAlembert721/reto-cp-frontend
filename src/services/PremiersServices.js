import Premiere from "../models/Premiere";

let id = 1;
const premieres = [
   new Premiere(
       id++,
       'Doctor Strange en el Multiverso de la Locura',
       'El Dr. Stephen Strange lanza un hechizo prohibido que abre la puerta al multiverso, incluida una versión alternativa de sí mismo, cuya amenaza para la humanidad es demasiado grande para las fuerzas combinadas de Strange, Wong y Wanda Maximoff.',
       "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001295?referenceScheme=HeadOffice&allowPlaceHolder=true"
   ),
    new Premiere(
        id++,
        'Jurassic World: Dominio',
        'Este junio, vive la épica conclusión de la era Jurásica con dos generaciones uniéndose por primera vez. La ganadora de un Oscar® Laura Dern, Jeff Goldblum y Sam Neill acompañan a Chris Pratt y Bryce Dallas Howard en Jurassic World: Dominio, una intrépida e impresionante nueva aventura cuyas fronteras se extienden a todos los rincones de la tierra. De la mano de Colin Trevorrow, arquitecto y director de Jurassic World, esta nueva entrega tiene lugar cuatro años después de la destrucción de la Isla Nublar. Los dinosaurios ahora viven (y cazan) junto a los humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y determinará, de una vez por todas, si los seres humanos seguirán siendo los máximos depredadores en un planeta que ahora comparten con las criaturas más temibles de la historia.',
        "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001266?referenceScheme=HeadOffice&allowPlaceHolder=true"
    ),
    new Premiere(
        id++,
        'Sonic 2: La Pelicula',
        'El erizo azul favorito del mundo está de regreso para una nueva aventura en SONIC 2: LA PELÍCULA. Después de establecerse en Green Hills, Sonic está ansioso por demostrar que tiene lo que se necesita para ser un verdadero héroe. Su prueba llega cuando el Dr. Robotnik regresa, esta vez con un nuevo socio, Knuckles, en busca de una esmeralda que tenga el poder de destruir civilizaciones. Sonic se une a su propio compañero, Tails, y juntos se embarcan en un viaje trotamundos para encontrar la esmeralda antes de que caiga en las manos equivocadas. SONIC 2: LA PELÍCULA está protagonizada por James Marsden, Ben Schwartz como la voz de Sonic (Luisito Comunica en la versión en español), Tika Sumpter, Natasha Rothwell, Adam Pally y Jim Carrey que regresan, junto con las nuevas incorporaciones Shemar Moore, con Idris. Elba como la voz de Knuckles y Colleen O\'Shaughnessey como la voz de Tails.',
        "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001227?referenceScheme=HeadOffice&allowPlaceHolder=true"
    )
];

export const fetchAllPremieres = Promise.resolve(premieres);