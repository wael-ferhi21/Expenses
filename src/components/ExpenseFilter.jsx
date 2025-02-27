import "./ExpenseFilter.css";

const ExpensesFilter = ({ years,setSelectedYear,selectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter by year</label>
      <select onChange={(event)=>{
        //console.log(event.target.value);
        setSelectedYear(event.target.value)
      }} value={selectedYear}>
        {years.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;