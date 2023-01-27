import { render, screen } from "@testing-library/react"
import TodoStatus from "../todo-status"


it("should render singular job text", ()=>{
render (<TodoStatus count={1}/>)
const statusEl=screen.getByText(/1 job left/i)
expect (statusEl).toBeInTheDocument()
})

test("should render plural jobs text", () => {
    render(<TodoStatus count={10} />);
    const statusEl = screen.getByText(/10 jobs left/i);
    expect(statusEl).toBeInTheDocument();
  });