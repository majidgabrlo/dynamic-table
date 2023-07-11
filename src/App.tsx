import Column from "./components/Column";
import Table from "./components/Table";

type User = {
  name: string,
  number: number
}

const users: User[] = [{ name: "Majid", number: 1 }, { name: "Milad", number: 2 }]

function App() {
  return (
    <div>
      <Table data={users} color="red">
        <Column<User> title={<div style={{background:"cyan"}}>Name</div>} render={(user) => <div>{user?.name}</div>} />
        <Column<User> title="number" render={(user) => <div style={{background:"red"}}>{user?.number}</div>} />
        <Column<User> title="Majid" render={(user) => <div style={{background:"blue"}}>{user?.number}</div>} />
      </Table>
    </div>
  );
}

export default App;
