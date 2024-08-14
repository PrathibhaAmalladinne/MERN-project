import { useRef } from "react"
import { useAddNewNote } from "../../hooks/useNotesData"
import styles from "./NewNote.module.css"
// import axios from "axios"
// import { useMutation } from "react-query"
function NewNote() {
  const { mutate: addNewNote } = useAddNewNote()

  const titleRef = useRef()
  const textRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(titleRef.current.value, textRef.current.value)

    const newNote = {
      title: titleRef.current.value,
      text: textRef.current.value,
      user: "66afd520b5bdc3702c6e37f9",
    }
    addNewNote(newNote)
  }

  return (
    <>
      <form className={styles.form}>
        <div className={styles.titlerow}>
          <h1 className={styles.h2}>New Note</h1>
          {/* <div className={styles.actionbuttons}>
            <button className={styles.iconbutton}>SAVE</button>
            <button className={styles.iconbutton}>DELETE</button>
          </div> */}
        </div>
        <label className={styles.label} htmlFor="note-title">
          Title:
        </label>
        <input id="note-title" name="title" type="text" value={titleRef} />
        <label className={styles.label} htmlFor="note-text">
          Text:
        </label>
        <input
          className={styles.inputtext}
          id="note-text"
          name="text"
          type="text"
          value={textRef}
          onChange={(e) => e.target.value}
        />

        <div className={styles.divider}>
          <button onClick={handleSubmit} className={styles.actionbuttons}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  )
}

export default NewNote
