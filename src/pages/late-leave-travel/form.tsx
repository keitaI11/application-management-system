import React, { ReactNode, FC, useState } from "react";
import '../../styles/modal.css'
import Button from '../../components/atoms/SampleAtom/button'

interface FormProps {
    onClose: () => void;
}

const Form: FC<FormProps> = ({ onClose }) => {
    const [documentType, setDocumentType] = useState(''); // 初期値は空
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState<string>('');

    const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReason(e.target.value);
    };

    const appProcessing = () => {
        // TODO: 申請のインサート処理を実装する
        console.log('書類種別:', documentType);
        console.log('開始日:', startDate);
        console.log('終了日:', endDate);
        console.log('申請理由:', reason);

        onClose();
    }

    return (
        <div className="form-modal">
            <div className="radio-button">
                <p>
                    書類種別:
                    <label>
                        <input type="radio" name="documentType" value="遅刻" checked={documentType === '遅刻'} onChange={() => setDocumentType('遅刻')} />
                        遅刻
                    </label>
                    <label>
                        <input type="radio" name="documentType" value="早退" checked={documentType === '早退'} onChange={() => setDocumentType('早退')} />
                        早退
                    </label>
                    <label>
                        <input type="radio" name="documentType" value="外出" checked={documentType === '外出'} onChange={() => setDocumentType('外出')} />
                        外出
                    </label>
                </p>
            </div>
            <div className="application">
                <p>
                    申請期間
                    <label>
                        開始日:
                        <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                    <label>
                        終了日:
                        <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </label>
                </p>
            </div>
            <div>
                <p>
                    申請理由：
                    <input type="text" value={reason} onChange={handleReasonChange} />
                </p>
            </div>
            <div className="button">
                <Button onClick={appProcessing}>申請</Button>
                <Button onClick={onClose}>キャンセル</Button>
            </div>
        </div>
    );
}

export default Form