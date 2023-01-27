import { render, screen } from "@testing-library/react";
import axios from "axios";
import Comments from "../comments";
jest.mock("axios");
describe("comments", () => {
  const comments = [
    { id: 1, body: "John" },
    { id: 2, body: "Michael" },
    { id: 3, body: "Joseph" },
  ];
  beforeEach( ()=>{
    axios.get.mockResolvedValueOnce({ data: comments });
    render(<Comments />);
  })
  it("should render the first card", async () => {
    const commentEl = await screen.findByTestId("comment-card-1");
    expect(commentEl).toBeInTheDocument();
  });
  it("should render 3 card", async () => {
    const commentEls = await screen.findAllByTestId(/comment-card-/i);
    expect(commentEls.length).toBe(3);
  });
  it("should render comment body", async ()=>{
    const commentEl = await screen.findByTestId("comment-body-1");
    expect(commentEl.innerHTML).toBe("John");
  })
});