

import ExpensesContainer from "./components/ExpensesContainer"

function App() {
  const expensesData = [
    {
      id: 1,
      title: "TV",
      price: 500,
      date: new Date("2025-02-13")
    },
    {
      id: 2,
      title: "PC",
      price: 300,
      date: new Date("2024-05-19")
    },
    {
      id: 3,
      title: "Car",
      price: 800,
      date: new Date("2023-07-18")
    }
  ]

  return (
    <div>
    <ExpensesContainer expensesData={expensesData} />
  </div>
  )
}

export default App
