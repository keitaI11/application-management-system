import React, { useState } from 'react';
import { lateLeaveTravelApplications } from '../../types/documentData'; // 仮データのインポート
import '../../styles/listStyles.css';

const LateLeaveTravel: React.FC = () => {
  const [applications, setApplications] = useState(lateLeaveTravelApplications);
  const [showModal, setShowModal] = useState(false);

  const handleSortByDate = () => {
    const sorted = [...applications].sort((a, b) => a.submitDate.getTime() - b.submitDate.getTime());
    setApplications(sorted);
  };

  const handleFilterByPeriod = (startDate: Date, endDate: Date) => {
    const filtered = applications.filter(app => 
      app.submitDate >= startDate && app.submitDate <= endDate
    );
    setApplications(filtered);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>遅刻・早退・外出出張</h1>
      <button onClick={handleOpenModal}>新規作成</button>
      {/* モーダルコンポーネントとそのロジックをここに追加 */}
      {showModal && (
        <div>
          {/* モーダルの内容 */}
          <button onClick={handleCloseModal}>閉じる</button>
        </div>
      )}
      <button onClick={handleSortByDate}>提出日でソート</button>
      {/* 期間フィルターの実装 */}
      <div>
        <label>
          開始日:
          <input type="date" onChange={(e) => {/* 適切な処理 */}} />
        </label>
        <label>
          終了日:
          <input type="date" onChange={(e) => {/* 適切な処理 */}} />
        </label>
        <button onClick={() => {/* 適切な処理 */}}>フィルター</button>
      </div>
      {/* アプリケーションリストの表示 */}
      <table>
        <thead>
          <tr>
            <th>提出日</th>
            <th>申請期間</th>
            <th>経営管理部</th>
            <th>社長</th>
            <th>部長/マネージャー</th>
            <th>書類種別</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              {/* app のデータを表示 */}
              <td>{app.submitDate.toString()}</td>
              <td>{app.period}</td>
              <td>{app.receiptStatus.management}</td>
              <td>{app.receiptStatus.president}</td>
              <td>{app.receiptStatus.departmentHead}</td>
              <td>{app.documentType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
};

export default LateLeaveTravel;
