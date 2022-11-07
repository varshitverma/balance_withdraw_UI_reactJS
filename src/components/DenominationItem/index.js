// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalanceFunction} = props
  const {value} = denominationsList

  const balanceDenomination = () => {
    updateBalanceFunction(value)
  }
  return (
    <li className="list-item">
      <button type="button" className="buttons" onClick={balanceDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
