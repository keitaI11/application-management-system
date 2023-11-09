import React, { useState } from 'react';
import { expenseApplications } from '../../types/documentData'; // 仮データのインポート
import '../../styles/listStyles.css';
import Form from './form'
import Modal from '../../components/molecules/SampleMolecule/modal'

const ExpensePage: React.FC = () => {
    const [applications, setApplications] = useState(expenseApplications);
    const [showModal, setShowModal] = useState(false);

    const handleSortByDate = () => {
        const sorted = [...applications].sort((a, b) => a.submitDate.getTime() - b.submitDate.getTime());
        setApplications(sorted);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>経費申請</h1>
            {/* モーダルのロジック */}
            {showModal && (
                <Modal isOpen={showModal} onClose={handleCloseModal}>
                    <Form onClose={handleCloseModal} />
                </Modal>
            )}
            <button onClick={handleOpenModal}>新規作成</button>
            <button onClick={handleSortByDate}>提出日でソート</button>
            {/* アプリケーションリストの表示 */}
            <table>
                <thead>
                    <tr>
                        <th>提出日</th>
                        <th>経営管理部</th>
                        <th>社長</th>
                        <th>部長/マネージャー</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            {/* app のデータを表示 */}
                            <td>{app.submitDate.toString()}</td>
                            <td>{app.receiptStatus.management}</td>
                            <td>{app.receiptStatus.president}</td>
                            <td>{app.receiptStatus.departmentHead}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpensePage;
