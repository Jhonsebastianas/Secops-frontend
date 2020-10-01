import React from 'react';
import { Button, Icon } from 'react-materialize';
import M from "materialize-css";

export function ButtonMenu() {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems, {});
    });
    return (
        <Button
            className="red"
            fab
            floating
            large
            node="button"
        >
            <Button
                className="red"
                floating
                icon={<Icon>insert_chart</Icon>}
                node="button"
            />
            <Button
                className="yellow darken-1"
                floating
                icon={<Icon>format_quote</Icon>}
                node="button"
            />
            <Button
                className="green"
                floating
                icon={<Icon>publish</Icon>}
                node="button"
            />
            <Button
                className="blue"
                floating
                icon={<Icon>attach_file</Icon>}
                node="button"
            />
        </Button>
    );
}