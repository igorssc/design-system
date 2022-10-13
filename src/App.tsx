import "../src/styles/global.css";
import { TextInput } from "./components/TextInput";

export function App() {
  return (
    <>
      <h1 className="text-cyan-500">Hello world</h1>
      <TextInput.Root>
        <TextInput.Input placeholder="ola" />
      </TextInput.Root>
    </>
  );
}
