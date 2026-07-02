import { useNoteActions } from '../store'

const VisibilityFilter = () => {
    const {setFilter} = useNoteActions()

    return (
      <div>
        <input
          type="radio"
          name="filter"
          onChange={() => setFilter("all")}
          defaultChecked
        />
        all
        <input
          type="radio"
          name="filter"
          onChange={() => setFilter("important")}
          defaultChecked
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => setFilter("nonimportant")}
          defaultChecked
        />not important
      </div>
    );
}

export default VisibilityFilter