import React from 'react';
import { TopMenu } from './menu/TopMenu';
import { ButtonMenu } from '../../components/common/ButtonMenu';

export function Home() {
    return (
        <div>
            <TopMenu />
            <ButtonMenu/>
        </div>
    );
}