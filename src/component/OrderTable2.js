import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'OrderID',
        dataIndex: 'orderId',
        key: 'orderID',

    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Qty',
        dataIndex: 'qty',
        key: 'qty',
    },
    {
        title: 'QuoteQty',
        key: 'quoteQty',
        dataIndex: 'quoteQty',
    },
    {
        title: 'Time',
        key: 'time',
        dataIndex: 'time',
    },
    {
        title: 'IsBuyer',
        key: 'isBuyer',
        dataIndex: 'isBuyer',
    }
];
const data = [
    {
        key: '1',
        orderId: 123,
        price: 120,
        qty: '12340',
        quoteQty: '12340',
        time: '12340',
        isBuyer: 'true',
    },

];

const OrderTable = ()=> {
    return <Table columns={columns} dataSource={data} />
}

export default OrderTable;