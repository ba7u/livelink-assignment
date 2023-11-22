import { create } from "zustand";
import {
  MockUserInterface,
  MockUserInterfaces,
} from "./assets/mocks/mock-data";

interface Vars {
  users: MockUserInterface[];
}

interface Actions {
  getUserById: (id?: MockUserInterface["id"]) => MockUserInterface | null;
}

export const useUserStore = create<Vars & Actions>((_, get) => ({
  users: MockUserInterfaces,
  getUserById: (id) => {
    if (!id) {
      return null;
    }
    const users = get().users;
    const user = users.find((user) => user.id === id);
    return user || null;
  },
}));
