import { useNavigate } from "react-router-dom"
import { useNotesData } from "../../hooks/useNotesData"
import NoteItem from "./NoteItem"
import styles from "./NotesList.module.css"

// import { useMutation, useQuery } from "@tanstack/react-query"

function NotesList() {
  const navigate = useNavigate()
  const onSuccess = (data) => {
    console.log("success", data)
  }
  const onError = () => {
    console.log("error")
  }
  const { isInitialLoading, isFetching, data, error } = useNotesData(
    onSuccess,
    onError
  )
  if (isInitialLoading || isFetching) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div className={styles.titlerow}>
        <h1 className={styles.h2}>NOTES LIST</h1>
        <button
          className={styles.titlerowbutton}
          onClick={() => navigate(`/dash/notes/new`)}
        >
          ADD NEW
        </button>
      </div>
      <div className={styles.notes}>
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Owner</th>
              <th scope="col">Status</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((note) => (
              <NoteItem note={note} key={note.title} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration))
// }
export default NotesList
