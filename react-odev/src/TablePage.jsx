// TablePage.jsx
import React from 'react';
import { Suppliers } from './Data.jsx';

const TablePage = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Order</th>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {Suppliers && Suppliers.map((item) => {
                  return <tr>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                </tr>
        })
    }
      </tbody>
    </table>
  );
};

export default TablePage;