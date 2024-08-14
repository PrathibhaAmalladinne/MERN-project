import styles from "./EditUser.module.css"
import { useParams } from "react-router-dom"
import { useUserData } from "../../hooks/useUsersData"
// import { useNotesByUserId } from "../../hooks/useNotesData"

function EditUser() {
  const { userId } = useParams()
  const onSuccess = (data) => {
    console.log("usersuccess", data)
  }
  const onError = () => {
    console.log("error")
  }
  const { isLoading, isFetching, isError, error, data } = useUserData(
    userId,
    onSuccess,
    onError
  )
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  const [user] = data
  const { username, roles, status } = user

  return (
    <>
      <form className={styles.form}>
        <div className={styles.titlerow}>
          <h1 className={styles.h2}>Edit User</h1>
          <div className={styles.actionbuttons}>
            <button className={styles.iconbutton}>SAVE</button>
            <button className={styles.iconbutton}>DELETE</button>
          </div>
        </div>
        <label className={styles.label} htmlFor="user-name">
          Username:
        </label>
        <input
          className={styles.input}
          id="user-name"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className={styles.row}>
          <div className={styles.divider}>
            <label className={styles.checkboxcontainer} htmlFor="user-status">
              Status:
            </label>
            <input
              className={styles.checkbox}
              id="user-status"
              type="checkbox"
              name="status"
              checked={status}
            />

            <label className={styles.label} htmlFor="user-roles">
              Role(s):
            </label>
            <select
              id="user-roles"
              name="user-roles"
              className={styles.select}
              value={[roles]}
            >
              <option>Employee</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>

            <div className={styles.divider}>
              <button className={styles.actionbuttons}>SUBMIT</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditUser
