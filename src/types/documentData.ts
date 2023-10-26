export const expenseApplications = [
    {
        id: 1,
        submitDate: new Date('2023-10-01'),
        receiptStatus: {
            management: 'Pending',
            president: 'Approved',
            departmentHead: 'Rejected'
        },
    },
    {
        id: 2,
        submitDate: new Date('2023-10-20'),
        receiptStatus: {
            management: 'Approved',
            president: 'Approved',
            departmentHead: 'Approved'
        },
    }
];

export const holidayApplications = [
    {
        id: 1,
        submitDate: new Date(2023, 4, 1),
        period: '2023/5/1 - 2023/5/10',
        receiptStatus: {
        management: 'Approved',
        president: 'Pending',
        departmentHead: 'Approved',
        },
        documentType: '有給休暇',
    },
    {
        id: 2,
        submitDate: new Date(2023, 6, 1),
        period: '2023/6/1 - 2023/6/1',
        receiptStatus: {
            management: 'Approved',
            president: 'Pending',
            departmentHead: 'Approved',
        },
        documentType: '欠勤',
    },
];

export const lateLeaveTravelApplications = [
    {
        id: 1,
        submitDate: new Date(2023, 4, 1),
        period: '2023/5/1 - 2023/5/10',
        receiptStatus: {
        management: 'Approved',
        president: 'Pending',
        departmentHead: 'Approved',
        },
        documentType: '遅刻',
    },
    {
        id: 2,
        submitDate: new Date(2023, 6, 1),
        period: '2023/6/1 - 2023/6/1',
        receiptStatus: {
            management: 'Approved',
            president: 'Pending',
            departmentHead: 'Approved',
        },
        documentType: '早退',
    },
    {
        id: 3,
        submitDate: new Date(2023, 7, 1),
        period: '2023/7/1 - 2023/7/1',
        receiptStatus: {
            management: 'Pending',
            president: 'Pending',
            departmentHead: 'Pending',
        },
        documentType: '外出',
    }
];
