/* eslint-disable no-unused-vars */
import AutoDeCarreras from "./AutoDeCarreras";
import { render, screen } from "@testing-library/react";
import {expect, test, describe} from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from 'react';

describe("El componente AutoDeCarrera", () => {

    test("se renderiza correctamente y muestra el mensaje de error si no hay estado de la carrera", () => {

        render(<AutoDeCarreras/>);

        const componente = screen.getByText( "Por favor, revisar el estado de la carrera");

        expect(componente).toBeInTheDocument();
    });

    test("muestra el mensaje de largada", () => {

        render(<AutoDeCarreras estado={"largada"} />);

        const componente = screen.getByText("El auto sale a toda marcha");

        expect(componente).toBeInTheDocument();

    });

    test("muestra el mensaje de espera", () => {
        render(<AutoDeCarreras estado={"espera"} />);

        const componente = screen.getByText("El auto está listo para largar");

        expect(componente).toBeInTheDocument();

    });

});