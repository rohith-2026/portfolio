import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeading } from "../../src/components/ui/SectionHeading";

describe("SectionHeading", () => { it("renders the section hierarchy", () => { render(<SectionHeading eyebrow="Test" title="A thoughtful title" copy="A short description." />); expect(screen.getByText("Test")).toBeInTheDocument(); expect(screen.getByRole("heading", { name: "A thoughtful title" })).toBeInTheDocument(); expect(screen.getByText("A short description.")).toBeInTheDocument(); }); });
