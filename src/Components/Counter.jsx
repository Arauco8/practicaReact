import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const Button = React.memo(({handleClick, name}) => {
    console.log(`${name} rendered`)
    return <button onClick={handleClick}>{name}</button>
})

/* Si aplicamos useCallback a nuestras funciones handleClick y envolvemos nuestro Button
en React.memo, podemos ver lo que useCallback nos proporciona. React.memo es similar
a useMemo y nos permite hacer un memo de un componente.

Aplicamos la memoización a nuestro componente Button, y los valores prop que se le
pasan son vistos como los mismos. Las dos funciones handleClick se almacenan en caché
y se verán como la misma función React hasta que cambie el valor de un elemento de la
matriz de dependencia (por ejemplo, countOne, countTwo).

 */

Button.displayName = 'Button';

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

const Counter = () => {

        console.log('counter rendered')
        const [countOne, setCountOne] = useState(0)
        const [countTwo, setCountTwo] = useState(0)
        const memoizedSetCountOne = useCallback(() => setCountOne(countOne +1), [countOne])
        const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo +1), [countTwo])

        return (
            <>
            {countOne} {countTwo}
            <Button handleClick={memoizedSetCountOne} name="button1" />
            <Button handleClick={memoizedSetCountTwo} name="button1" />
            </>
        )
}

export default Counter