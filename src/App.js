import ExpenceTracker from "./component/ExpenceTracker/ExpenseTracker";
import { SnackbarProvider } from 'notistack'
function App() {
  return (
    <SnackbarProvider>
    <h2>Expense Tracker</h2>
    <ExpenceTracker/>
    </SnackbarProvider>
    
    
  );
}

export default App;
