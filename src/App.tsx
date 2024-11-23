import { RouterProvider } from "react-router-dom"
import router from "./router/Router"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./resources/api/utils/react-query"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
      />
    </QueryClientProvider>
  )
}

export default App
