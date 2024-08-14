import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import About from "./pages/About"
import DashLayout from "./pages/DashLayout"
import NotesList from "./features/notes/NotesList"
import UsersList from "./features/users/UsersList"
import EditNote from "./features/notes/EditNote"
import NewNote from "./features/notes/NewNote"
import EditUser from "./features/users/EditUser"
import NewUser from "./features/users/NewUser"
// import { useQuery } from "react-query"
// import { getNote } from "./features/notes/api"

function App() {
  // const { id } = useParams()
  //  const note = useSelector((state) => state.notes.selectNoteById(id))
  //  const ticket = note.ticket
  // const noteQuery = useQuery({
  //   queryKey: ["notes", id],
  //   queryFn: () => getNote(id),
  // })
  // if (noteQuery.status === "loading") return <h1>Loading...</h1>
  // if (noteQuery.status === "error")
  //   return <h1>{JSON.stringify(noteQuery.error)}</h1>
  // console.log("nasryyy")
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path="new" element={<NewNote />} />
            <Route path=":noteId" element={<EditNote />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path="new" element={<NewUser />} />
            <Route path=":userId" element={<EditUser />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
