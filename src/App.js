import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center">
        <label className="text-5xl font-medium text-[#1F93D5]">swiftBank</label>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form/>
      </div>
    </div>
  );
}

export default App;
