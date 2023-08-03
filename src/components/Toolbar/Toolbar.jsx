import './Toolbar.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
      <div className='filters'>
        {filters.map((el) => (
          <button
              onClick = { onSelectFilter }
              className = { el === selected ? 'active' : '' }
            >{ el }
          </button>
          ))
        }
      </div>
    )
}
