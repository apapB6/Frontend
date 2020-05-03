import uuid from 'uuid/v1';

export default [
	{
		id: uuid(),
		ref: 'CDD1049',
		amount: 30.5,
		customer: {
			name: 'Ekaterina Tankova',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1555016400000,
		status: 'Overdue',
		namaStatus: 'Overdue'
	},
	{
		id: uuid(),
		ref: 'CDD1048',
		amount: 25.1,
		customer: {
			name: 'Cao Yu',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1555016400000,
		status: 'Overdue',
		namaStatus: 'Overdue'
	},
	{
		id: uuid(),
		ref: 'CDD1047',
		amount: 10.99,
		customer: {
			name: 'Alexa Richardson',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1554930000000,
		status: 'Overdue',
		namaStatus: 'Overdue'
	},
	{
		id: uuid(),
		ref: 'CDD1046',
		amount: 96.43,
		customer: {
			name: 'Anje Keizer',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1554757200000,
		status: 'Overdue',
		namaStatus: 'Overdue'
	},
	{
		id: uuid(),
		ref: 'CDD1045',
		amount: 32.54,
		customer: {
			name: 'Clarke Gillebert',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1554670800000,
		status: 'Overdue',
		namaStatus: 'Overdue'
	},
	{
		id: uuid(),
		ref: 'CDD1044',
		amount: 16.76,
		customer: {
			name: 'Adam Denisov',
			judul: 'Buku B',
			jumlah_hari: 13,
			jumlah_denda: 13000
		},
		createdAt: 1554670800000,
		status: 'Overdue',
		namaStatus: 'Overdue',
	}
];
