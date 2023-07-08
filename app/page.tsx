import { getAllWishes } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";


export default async function Home() {
  const wishes = await getAllWishes();
  console.log(wishes);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center  my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold"> Todo List</h1>
        <AddTask />
      </div>
      <div>
        <ToDoList />
      </div>
    </main>
  );
}
