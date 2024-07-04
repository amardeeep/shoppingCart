import { describe,it,expect } from "vitest";
import { render,screen } from "@testing-library/react";
import App from "./app";
describe("Is testing working ?",()=>{
    it("Tst1",()=>{
        render(<App/>);
        expect(screen.getByRole('heading').textContent).toMatch(/am i working/i)
    })
})