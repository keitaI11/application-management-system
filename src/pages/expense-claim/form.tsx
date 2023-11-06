import React, { ReactNode, FC, useState, ChangeEvent } from "react";
import '../../styles/modal.css'
import Button from '../../components/atoms/SampleAtom/button'

interface FormProps {
    onClose: () => void;
}

interface Expense {
    date: string;
    transportation: string;
    amount: string;
    route: string;
    destination: string;
}

interface Payment {
    date: string;
    payee: string;
    amount: string;
    description: string;
}

const Form: FC<FormProps> = ({onClose}) => {
    const [expenses, setExpenses] = useState([
        { date: '', transportation: '', amount: '', route: '', destination: '' },
    ]);

    const [payments, setPayments] = useState([
        { date: '', payee: '', amount: '', description: '' },
    ]);

    const addExpenseRow = () => {
        setExpenses([...expenses, { date: '', transportation: '', amount: '', route: '', destination: '' }]);
    };

    const addPaymentRow = () => {
        setPayments([...payments, { date: '', payee: '', amount: '', description: '' }]);
    };

    const handleExpenseChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof Expense) => {
        const newExpenses = [...expenses];
        newExpenses[index][field] = e.target.value;
        setExpenses(newExpenses);
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof Payment) => {
        const newPayments = [...payments];
        newPayments[index][field] = e.target.value;
        setPayments(newPayments);
    };

    const appProcessing = () => {
        // TODO: 申請のインサート処理を実装する
        console.log('交通費データ:', expenses);
        console.log('支払いデータ:', payments);
        onClose();
    }

    return (
        <div className="travel-expense-form">
            <div>
                <div>
                    <h2>交通費</h2>
                    <div className="form-table-section">
                        <table className="form-table">
                            <thead>
                                <tr>
                                    <th>日付</th>
                                    <th>交通機関名</th>
                                    <th>金額</th>
                                    <th>利用区間</th>
                                    <th>行き先</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense, index) => (
                                    <tr key={index}>
                                        <td><input type="date" value={expense.date} onChange={(e) => handleExpenseChange(e, index, 'date')} /></td>
                                        <td><input type="text" value={expense.transportation} onChange={(e) => handleExpenseChange(e, index, 'transportation')} /></td>
                                        <td><input type="number" value={expense.amount} onChange={(e) => handleExpenseChange(e, index, 'amount')} /></td>
                                        <td><input type="text" value={expense.route} onChange={(e) => handleExpenseChange(e, index, 'route')} /></td>
                                        <td><input type="text" value={expense.destination} onChange={(e) => handleExpenseChange(e, index, 'destination')} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={addExpenseRow}>＋</button>
                </div>

                <div>
                    <h2>支払い</h2>
                    <div className="form-table-section">
                        <table className="form-table">
                            <thead>
                                <tr>
                                    <th>日付</th>
                                    <th>支払い先</th>
                                    <th>金額</th>
                                    <th>摘要</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payments.map((payment, index) => (
                                    <tr key={index}>
                                        <td><input type="date" value={payment.date} onChange={(e) => handlePaymentChange(e, index, 'date')} /></td>
                                        <td><input type="text" value={payment.payee} onChange={(e) => handlePaymentChange(e, index, 'payee')} /></td>
                                        <td><input type="number" value={payment.amount} onChange={(e) => handlePaymentChange(e, index, 'amount')} /></td>
                                        <td><input type="text" value={payment.description} onChange={(e) => handlePaymentChange(e, index, 'description')} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button onClick={addPaymentRow}>＋</button>
                </div>
            </div>
            <br />
            <div className="button">
                <Button onClick={appProcessing}>申請</Button>
                <Button onClick={onClose}>キャンセル</Button>
            </div>
        </div>
    );
}

export default Form