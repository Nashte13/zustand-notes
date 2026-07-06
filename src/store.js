import { create } from 'zustand'


const useNoteStore = create(set => ({
    notes: initialNotes,
    filter: 'all',
    actions: {
        add: note => set(
            state => ({notes: state.notes.concat(note)})
        ),
        toggleImportance: id => set(
            state => ({
                notes: state.notes.map(note =>
                    note.id === id ? {...note, important: !note.important} : note
                )
            })
        ),
        setFilter: value => set(() => ({filter: value}))
    }
}))

export const useNotes = () => {
    const notes = useNoteStore(state => state.notes)
    const filter = useNoteStore(state => state.filter)
    if (filter === 'important') return notes.filter(n => n.important)
    if (filter === 'nonimportant') return notes.filter(n => !n.important)
    return notes
}