import { create } from 'zustand'
import noteService from './services/notes'


const useNoteStore = create(set => ({
    notes: [],
    filter: 'all',
    actions: {
        add: async (content) => {
            const newNote = await noteService.createNew(content)
            set(state => ({notes: state.notes.concat(newNote)}))
        },
        initialize: async () => {
            const notes = await noteService.getAll()
            set(() => ({notes}))
        }
    }
}))

export const useNotes = () => {
    const notes = useNoteStore(state => state.notes)
    const filter = useNoteStore(state => state.filter)
    if (filter === 'important') return notes.filter(n => n.important)
    if (filter === 'nonimportant') return notes.filter(n => !n.important)
    return notes
}