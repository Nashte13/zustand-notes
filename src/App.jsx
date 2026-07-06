import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import VisibilityFilter from './components/VisibilityFilter'
import { useNoteActions } from './store'
import noteService from './services/notes'
import { useEffect } from 'react'

const App = () => {
  const { initialize } = useNoteActions()
  
  useEffect(() => {
    noteService.getAll().then(notes => initialize(notes))
  }, {initialize})

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <NoteList />
    </div>
  )
}

export default App