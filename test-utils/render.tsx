import { render as testingLibraryRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter>
        <MantineProvider>{children}</MantineProvider>
      </MemoryRouter>
    ),
  });
}
