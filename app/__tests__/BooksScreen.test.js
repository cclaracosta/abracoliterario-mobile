import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import UserProfile from "../tela principal"; 
import { useRouter } from "expo-router";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("Tela Principal (UserProfile)", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
  });

  it("renderizar o campo de busca", () => {
    const { getByTestId } = render(<UserProfile />);
    const searchInput = getByTestId("campo-busca");
    expect(searchInput).toBeTruthy();
  });

  it("filtrar livros ao digitar no campo de busca", () => {
    const { getByTestId, getByText } = render(<UserProfile />);
    const input = getByTestId("campo-busca");

    fireEvent.changeText(input, "clara");

    expect(getByText("Clara dos Anjos")).toBeTruthy();
  });

  it("renderizar a imagem do livro", () => {
    const { getByTestId } = render(<UserProfile />);
    const image = getByTestId("book-image-1");
    expect(image).toBeTruthy();
  });

  it("navegar ao clicar em um livro", () => {
    const { getByTestId } = render(<UserProfile />);
    
    const item = getByTestId("book-1");

    fireEvent.press(item);

    expect(mockPush).toHaveBeenCalledTimes(1);

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/livros",
      params: expect.objectContaining({
        id: "1",
        title: expect.any(String),
        description: expect.any(String),
        image: expect.any(String),
      }),
    });
  });

  it("navegar para o perfil ao clicar no botão superior", () => {
    const { getByTestId } = render(<UserProfile />);
    const botaoPerfil = getByTestId("botao-perfil");

    fireEvent.press(botaoPerfil);

    expect(mockPush).toHaveBeenCalledWith("/perfil");
  });
});
