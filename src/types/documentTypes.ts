export type ReceiptStatus = {
    management: 'Approved' | 'Pending' | 'Rejected';
    president: 'Approved' | 'Pending' | 'Rejected';
    departmentHead: 'Approved' | 'Pending' | 'Rejected';
};

export type LateLeaveTravelApplication = {
    id: number;
    submitDate: Date;
    period: string;
    receiptStatus: ReceiptStatus;
    documentType: '遅刻' | '早退' | '外出';
};

export type HolidayApplication = {
    id: number;
    submitDate: Date;
    period: string;
    receiptStatus: ReceiptStatus;
    documentType: '有給休暇' | '欠勤';
};

export type ExpenseApplication = {
    id: number;
    submitDate: Date;
    receiptStatus: ReceiptStatus;
};
