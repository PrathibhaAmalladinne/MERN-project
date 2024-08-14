import styles from "./EditNote.module.css"
import { useParams } from "react-router-dom"
import { useNoteData } from "../../hooks/useNotesData"
import { useUsersData } from "../../hooks/useUsersData"

function EditNote() {
  const { noteId } = useParams()
  const {
    isLoading: isLoadingNote,
    isFetching: isFetchingNote,
    isError: isErrorNote,
    // error: errorNote,
    data: dataNote,
  } = useNoteData(noteId)
  const {
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
    isError: isErrorUser,
    // error: errorUser,
    data: dataUsers,
  } = useUsersData()

  if (isLoadingNote || isFetchingNote || isLoadingUser || isFetchingUser) {
    return <h2>Loading...</h2>
  }
  if (isErrorNote || isErrorUser) {
    return <h2>"error"</h2>
  }
  const [note] = dataNote
  const users = dataUsers
  const {
    id: _id,
    title,
    text,
    username,
    user,
    ticket,
    completed,
    createdAt,
    updatedAt,
  } = note
  const options = users.data.map((user) => {
    return (
      <option key={user._id} value={user._id}>
        {user.username}
      </option>
    )
  })
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <div className={styles.titlerow}>
          <h2 className={styles.h2}>Edit Note #{ticket}</h2>
          <div className={styles.actionbuttons}>
            <button className={styles.iconbutton}>SAVE</button>
            <button className={styles.iconbutton}>DELETE</button>
          </div>
        </div>
        <label className={styles.label} htmlFor="note-title">
          Title:
        </label>
        <input id="note-title" name="title" type="text" value={title} />
        <label className={styles.label} htmlFor="note-text">
          Text:
        </label>
        <input
          className={styles.inputtext}
          id="note-text"
          name="text"
          type="text"
          value={text}
        />
        <div className={styles.row}>
          <div className={styles.divider}>
            <label
              className={styles.checkboxcontainer}
              htmlFor="note-completed"
            >
              WORK COMPLETE:
            </label>
            <input
              className={styles.checkbox}
              id="note-completed"
              type="checkbox"
              name="completed"
              checked={completed}
            />
            <label
              className={styles.label}
              htmlFor="note-username"
              value={username}
            >
              Assigned To:
            </label>
            <select
              id="note-username"
              name="username"
              className={styles.select}
              value={user}
            >
              {options}
            </select>

            <div className={styles.divider}>
              <p>
                Created:
                <br />
                {createdAt}
              </p>
              <p>
                Updated:
                <br />
                {updatedAt}
              </p>
            </div>
            <div className={styles.divider}>
              <button className={styles.actionbuttons}>SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </>
    //submit=>Call UpdateNote
  )
}

export default EditNote
