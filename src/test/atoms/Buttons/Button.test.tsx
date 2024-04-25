import { render, screen, fireEvent } from "@testing-library/react";
import { BtnAction } from "../../../components/atoms/Buttons/Button";

describe("Button Test", () => {
  beforeEach(() => {
    render(
      <BtnAction
        btnlabel={"Boton"}
        btncolor="success"
        action={() => console.log("hola mundo")}
      />
    );
  });

  test("El botón debería tener las props correctas", () => {
    expect(screen.getByText("Boton")).toBeDefined();
  });

  test("El botón action funciona", () => {
    const boton = screen.getByText("Boton");
    fireEvent.click(boton);
    expect(console.log()).toHaveBeenCalledWith("hola mundo");
  });
});

