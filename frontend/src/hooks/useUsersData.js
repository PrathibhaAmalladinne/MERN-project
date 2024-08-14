import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import axios from "axios"

const fetchUsers = () => {
  return axios.get("http://localhost:3500/users")
}

const addNewUser = (newUser) => {
  return axios.post("http://localhost:3500/users", newUser)
}

const deleteUser = (userId) => {
  return axios.delete("http://localhost:3500/users", userId)
}

export const useUsersData = () => {
  return useQuery(["users-all"], fetchUsers, {})
}
export const useUserData = (userId, onSuccess, onError) => {
  return useQuery(["users-all"], fetchUsers, {
    onSuccess,
    onError,
    select: (data) => {
      const user = data?.data.filter((user) => user._id === userId)
      console.log(userId)
      return user
    },
  })
}

export const useAddNewUser = () => {
  const queryClient = useQueryClient()
  return useMutation(addNewUser, {
    onError: (error) => {
      console.log(error.response.data)
      console.log(error.response.status)
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users-all")
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users-all")
    },
  })
}
