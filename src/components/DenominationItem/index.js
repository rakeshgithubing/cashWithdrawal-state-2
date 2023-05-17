// Write your code here

import './index.css'

const DenominationItem = props => {
  const {obj, onAmountWithdrawal} = props
  const {value} = obj

  const onWithdrawal = () => {
    onAmountWithdrawal(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
