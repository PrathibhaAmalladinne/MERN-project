import { useQuery, useMutation } from "@tanstack/react-query"
import axios from "axios"

const fetchNotes = () => {
  return axios.get("http://localhost:3500/notes")
}

export const useNotesData = (onSuccess, onError) => {
  return useQuery(["notes-all"], fetchNotes, {
    onSuccess,
    onError,
  })
}
export const useNoteData = (
  noteId
  // onSuccess, onError
) => {
  return useQuery(["notes-all"], fetchNotes, {
    // onSuccess,
    // onError,
    select: (data) => {
      const note = data?.data.filter((note) => note._id === noteId)
      return note
    },
  })
}

export const useNotesByUserId = (userId, onSuccess, onError) => {
  return useQuery(["notes-all"], fetchNotes, {
    onSuccess,
    onError,
    select: (data) => {
      const notes = data?.data.filter((note) => note.user === userId)
      return notes
    },
  })
}

const addNewNote = (newNote) => {
  return axios.post("http://localhost:3500/notes", newNote)
}
export const useAddNewNote = () => {
  return useMutation(addNewNote)
}
