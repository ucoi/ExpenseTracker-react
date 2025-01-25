import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transactions from "./Transactions";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transactions key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
