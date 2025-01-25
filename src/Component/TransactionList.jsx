import React from "react";

const TransactionList = () => {
  return (
    <div>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
