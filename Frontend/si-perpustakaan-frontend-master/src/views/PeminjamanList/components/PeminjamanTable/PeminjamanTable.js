import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardActions,
	CardContent,
	Avatar,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
	TablePagination
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 1050
	},
	nameContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	avatar: {
		marginRight: theme.spacing(2)
	},
	actions: {
		justifyContent: 'flex-end'
	},
	rejectBtn: {
		display: 'inline-block',
		background: '#BB3D3D',
		color: '#FFFFFF',
		padding: '0 5px',
		borderRadius: '5px',
		marginRight: '5px',
		cursor: 'pointer'
	},
	acceptBtn: {
		display: 'inline-block',
		background: '#5E9A78',
		color: '#FFFFFF',
		padding: '0 5px',
		borderRadius: '5px',
		cursor: 'pointer'
	},
	borrowBtn: {
		display: 'inline-block',
		background: '#357AE1',
		color: '#FFFFFF',
		padding: '0 5px',
		borderRadius: '5px',
		cursor: 'pointer'
	}
}));

const PeminjamanTable = props => {
	const { className, users, ...rest } = props;

	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	const handleRowsPerPageChange = event => {
		setRowsPerPage(event.target.value);
	};

	const aksiMenu = (index) => {
		if (users[index].status === 'Menunggu') {
			return (
				<div>
					<div className={classes.rejectBtn}>
						Tolak
				</div>
					<div className={classes.acceptBtn}>
						Terima
				</div>
				</div>
			)
		} else if (users[index].status === 'Disetujui') {
			return (
				<div>
					<div className={classes.borrowBtn}>
						Diambil
					</div>
				</div>
			)
		} else if (users[index].status === 'Dipinjam') {
			return (
				<div>
					<div className={classes.borrowBtn}>
						Selesai
					</div>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>No</TableCell>
									<TableCell>Tanggal Pinjam</TableCell>
									<TableCell>Kode</TableCell>
									<TableCell>Judul</TableCell>
									<TableCell>Nama Peminjam</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Aksi</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.slice(0, rowsPerPage).map(user => (
									<TableRow
										className={classes.tableRow}
										hover
										key={user.id}
									>
										<TableCell>{users.indexOf(user) + 1}</TableCell>
										<TableCell>
											01/01/20
										</TableCell>
										<TableCell>NIP123456</TableCell>
										<TableCell>APAP</TableCell>
										<TableCell>
											<div className={classes.nameContainer}>
												<Typography variant="body1">{user.name}</Typography>
											</div>
										</TableCell>
										<TableCell>{user.status}</TableCell>
										<TableCell>
											{
												aksiMenu(users.indexOf(user))
											}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</PerfectScrollbar>
			</CardContent>
			<CardActions className={classes.actions}>
				<TablePagination
					component="div"
					count={users.length}
					onChangePage={handlePageChange}
					onChangeRowsPerPage={handleRowsPerPageChange}
					page={page}
					rowsPerPage={rowsPerPage}
					rowsPerPageOptions={[5, 10, 25]}
				/>
			</CardActions>
		</Card>
	);
};

PeminjamanTable.propTypes = {
	className: PropTypes.string,
	users: PropTypes.array.isRequired
};

export default PeminjamanTable;
