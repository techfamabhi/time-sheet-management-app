import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "@/components/common/Badge";
import { describe, it, expect } from "vitest";

describe("Badge Component", () => {
  it("renders status text correctly", () => {
    render(<Badge status="COMPLETED" />);
    expect(screen.getByText("COMPLETED")).toBeInTheDocument();
  });

  it("applies green classes for COMPLETED status", () => {
    const { container } = render(<Badge status="COMPLETED" />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("bg-green-100");
    expect(span).toHaveClass("text-green-700");
  });

  it("applies yellow classes for INCOMPLETE status", () => {
    const { container } = render(<Badge status="INCOMPLETE" />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("bg-yellow-100");
    expect(span).toHaveClass("text-yellow-700");
  });

  it("applies pink classes for MISSING status", () => {
    const { container } = render(<Badge status="MISSING" />);
    const span = container.querySelector("span");
    expect(span).toHaveClass("bg-pink-100");
    expect(span).toHaveClass("text-pink-700");
  });
});
