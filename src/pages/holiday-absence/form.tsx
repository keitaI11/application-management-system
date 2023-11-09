import React, { ReactNode, FC, useState } from "react";
import '../../styles/modal.css'
import Button from '../../components/atoms/SampleAtom/button'

interface FormProps {
    onClose: () => void;
}

const Form: FC<FormProps> = ({onClose}) => {
    const [vacationClassification, setVacationClassification] = useState(''); // 初期値は空
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [reason, setReason] = useState<string>('');

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReason(e.target.value);
    };

    const appProcessing = () => {
        // TODO: 申請のインサート処理を実装する
        console.log('休暇種別:', vacationClassification);
        console.log('開始日:', startDate);
        console.log('終了日:', endDate);
        console.log('申請理由:', reason);
        onClose();
    }

    return (
        <div className="form-modal">
            <div className="radio-button">
                <p>
                    休暇種別:
                    <label>
                        <input type="radio" name="vacationClassification" value="有給休暇" checked={vacationClassification === '有給休暇'} onChange={() => setVacationClassification('有給休暇')}/>
                        有給休暇
                    </label>
                    <label>
                        <input type="radio" name="vacationClassification" value="代休" checked={vacationClassification === '代休'} onChange={() => setVacationClassification('代休')} />
                        代休
                    </label>
                    <label>
                        <input type="radio" name="vacationClassification" value="欠勤" checked={vacationClassification === '欠勤'} onChange={() => setVacationClassification('欠勤')} />
                        欠勤
                    </label>
                </p>
            </div>
            <div>
                <p>
                    申請期間
                    <label>
                        開始日:
                        <input type="dateTime-local" value={startDate} onChange={ handleStartDateChange } />
                    </label>
                    <label>
                        終了日:
                        <input type="dateTime-local" value={endDate} onChange={ handleEndDateChange } />
                    </label>
                </p>
            </div>
            <div>
                <p>
                    申請理由
                    <input type="text" value={reason} onChange={ handleReasonChange }/>
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