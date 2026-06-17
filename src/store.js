import { create } from 'zustand'

const useNoteStore = create(set => ({
    notes: [
        {
            id: 1,
            content: 'Zustand is less complex that redux',
            important: true,
        },
    ],
}))

export const useNotes = () => useNoteStore(state => state.notes)