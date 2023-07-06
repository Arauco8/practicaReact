/* 
import {expect, test, describe} from "@jest/globals";
 // Utilizamos el método test con una breve    // descripción del test case y el bloque
// de código que debe ejecutarse para
// realizar la comprobación
describe('sum function tests', () => {
    test('should sum two positive numbers', () => {
      const number1 = 2;
      const number2 = 3;
   
      const result = sum(number1, number2);
   
      expect(result).toBe(5);
    });
   
    test('should sum two negative numbers', () => {
      const number1 = -2;
      const number2 = -3;
   
      const result = sum(number1, number2);
   
      expect(result).toBe(-5);
    });
  });

  // Utilizamos el método test con una breve    // descripción del test case y el bloque
// de código que debe ejecutarse para
// realizar la comprobación */


import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

//render(): esté método es el encargado de renderizar el componente que deseamos testear. 
//Debemos pasarle un componente React y nos devuelve el componente renderizado dentro de un 
//contenedor que se inserta en el document.body. Sintaxis:

render(<button>Submit</button>);

//screen: este objeto nos permite acceder a los distintos métodos de búsqueda (queries) para 
//acceder a los distintos elementos del DOM con los que deseamos interactuar.

//Tipos de queries: las queries se componen de un prefijo (que determina el valor de retorno y 
//    en qué casos la búsqueda debe arrojar un error) y un sufijo (que determina el atributo 
//        mediante el cual se va a ejecutar la búsqueda). Veamos los distintos tipos.

const button = screen.getByRole('button', {name: “Enviar”}); 

// fireEvent() Permite disparar un evento del DOM sobre un elemento en particular, por ejemplo, un botón.
fireEvent.click(button);

// userEvent() Este método es provisto por la librería user-event y sirve para simular interacciones 
// de personas usuarias con nuestra aplicación, disparando los eventos de forma similar a si dicha interacción 
// tuviera lugar en el navegador. Si bien en la práctica nos permite disparar eventos de igual manera a que si 
// lo hiciéramos utilizando fireEvent(), la principal diferencia al utilizar este método es —tal como mencionamos 
// anteriormente— que los eventos son disparados tal como si una persona hubiese interactuado con la aplicación 
// mediante el navegador. Esto permite detectar casos en donde el evento no puede ser disparado por el usuario, 
// por ejemplo en caso de existir algún bug.

// Para emplear esta librería, podemos utilizar el método setup() dentro de cada test. 
// Luego, podremos disparar el evento que deseamos dependiendo el caso de nuestro test.

test('click en el botón', async () => {
    const userEvent = userEvent.setup()
    render(<button>Submit</button>);
    await userEvent.click(screen.getByRole
    ('button', {name: “Enviar”}))
    // Aquí escribimos nuestras aserciones...
})

// RTL utiliza jest-dom, una librería que provee una serie de métodos adicionales para evaluar determinado comportamiento en el DOM.
// Alguno de los “matchers” más utilizados son:

   // - toBeInTheDocument(): evalúa si un determinado elemento se encuentra presente en el documento.
   // - toBeDisabled(): evalúa si determinados elementos (por ejemplo, un botón) se encuentran deshabilitados desde la perspectiva del usuario.
   // - toHaveTextContent(): permite evaluar si un elemento posee un texto determinado. 

   // En el siguiente enlace, podrás ver una lista de todos los matchers que nos ofrece jest-dom:

   // https://github.com/testing-library/jest-dom