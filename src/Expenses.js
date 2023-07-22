import ExpenseItem from "./ExpenseItem/ExpenseItem"

function Expenses(props) {
    console.log(props)
    return (
        <div>
            <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
            />
      </div>
    )
}

export default Expenses