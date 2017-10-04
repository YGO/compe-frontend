import React from 'react'
import PropTypes from 'prop-types'
import EntryListItemContainer from './entry-list-item.container'
import RoundSelectorContainer from './round-selector.container'

const EntryList = ({entries, pars}) => (
  <div>
    <h2>出場選手一覧</h2>
    <div className='row mb-2'>
      <div className='col-auto mr-auto'/>
      <div className='col-auto'>
        <RoundSelectorContainer/>
      </div>
    </div>
    {entries.map(e =>
      <EntryListItemContainer key={`EntryList-${e.id}`}
                              pars={pars}
                              {...e} />
    )}
  </div>
)

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
  pars: PropTypes.array.isRequired,
}

export default EntryList
