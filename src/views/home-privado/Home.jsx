import React from 'react';
import { TopMenu } from './menu/TopMenu';
import { ButtonMenu } from '../../components/common/ButtonMenu';

// Ejemplo estado recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from '../../stateManagement/recoil/atoms/atomEjemplo';
import { incrementSelector } from '../../stateManagement/recoil/selectors/selectorEjemplo';
import { Button } from 'react-materialize';

export function Home() {
    const [count, setCounter] = useRecoilState(counterState);
    let value = useRecoilValue(incrementSelector)
    return (
        <div>
            <TopMenu />
            <h1>{count}</h1>
            <ButtonMenu/>
            <Button onClick={() => setCounter(value)}>
                +
            </Button>
        </div>
    );
}