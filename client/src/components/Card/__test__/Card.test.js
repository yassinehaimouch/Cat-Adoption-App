import { render, screen } from "@testing-library/react";
import Card from "../Card";
import userEvent from "@testing-library/user-event";

const cardProps = {
  name: "Sydney",
  phone: "000-000-000",
  email: "test@test.com",
  image: {url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", alt: "beautiful cat"},
  favoured: false
}

describe("Card", () => {
  test("should show name of cat", () => {
    render(
      <Card {...cardProps}/>
    )
    expect(screen.getByRole("heading", {name: /sydney/i})).toBeInTheDocument()
  })

  test("should show phone number", () => {
    render(
      <Card {...cardProps}/>
    )
    expect(screen.getByText(/000-000-000/i)).toBeInTheDocument()
  })

  test("should show the email", () => {
    render(
      <Card {...cardProps}/>
    )
    expect(screen.getByText(/test@test.com/i)).toBeInTheDocument()
  })

  test("should show image with correct src", () => {
    render(
      <Card {...cardProps}/>
    )
    expect(screen.getByAltText(/beautiful cat/i).src).toBe(cardProps.image.url);
  })

  test("should show outlined heart", () => {
    render(
      <Card {...cardProps}/>
    )
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument()
  })

  test("should show filled heart", () => {
    render(
      <Card {...cardProps} favoured={true}/>
      )
      expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument()
      expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument()
  })

  test("should toggle heart status", () => {
    render(<Card {...cardProps}/>)

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole("button"))

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole("button"))

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument()

  })
})