import { describe,it,expect } from "vitest";
import { render,screen } from "@testing-library/react";
import Products from "./products";
describe("api testing",()=>{
    it("fetches something",()=>{
        render(<Products/>)
        expect(screen.getByRole("heading").textContent).toMatch(/something/)
    })
})