import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Chat, Rooms } from "./components";
import { useStore } from "./store";

const queryClient = new QueryClient();

function App() {
  const { activeRoom } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen flex">
        <Rooms />
        {activeRoom && <Chat />}
      </main>
    </QueryClientProvider>
  );
}

export default App;
