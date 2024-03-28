import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from "./components/Game";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/session/:sessionId" Component={Game} />
            </Routes>
          </BrowserRouter>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}