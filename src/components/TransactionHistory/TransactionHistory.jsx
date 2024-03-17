import style from './TransactionHistory.module.scss';

const TransactionHistory = ({ items }) => {
  const sortedItems = items.toSorted((a, b) => b.amount - a.amount);

  return (
    <table className={style.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {sortedItems.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
