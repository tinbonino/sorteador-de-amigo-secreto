import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
test ("Cuando el input está vacío, nuevos participantes no podrán ser agregados", () => {
    
    render(<Formulario/>);

    // Encontrar en el DOM el input

    const input = screen.getByPlaceholderText("Ingrese los nombres de los participantes");

    // Encontrar en el DOM el botón

    const boton = screen.getByRole("button");

    // Garantizar que el input esté en el documento
    expect(input).toBeInTheDocument();
    // Garantizar que el botón esté deshabilitado
    expect(boton).toBeDisabled();

})