import React, { useState, useEffect } from 'react';
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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { getInitials } from 'helpers';
import { StatusBullet } from 'components';
import PeminjamanListService from './PeminjamanListService';

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
		marginRight: theme.spacing(1)
	},
	actions: {
		justifyContent: 'flex-end'
	},
	status: {
		marginRight: theme.spacing(1)
	},
}));

const PeminjamanTable = props => {
	const { className, users, ...rest } = props;

	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
	const [PeminjamanList, setPeminjamanList] = useState([]);

	useEffect(() => {
		refreshPeminjaman()
	})

	const refreshPeminjaman = () => {
		PeminjamanListService.getAllPeminjaman().then(response => setPeminjamanList(response.data))
	}

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	const handleRowsPerPageChange = event => {
		setRowsPerPage(event.target.value);
	};

	const statusOption = (index) => {
		if (PeminjamanList[index].status === 0) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="info"
					size="sm"
				/>
				Menunggu Persetujuan
			</div>
			)
		} else if (PeminjamanList[index].status === 1) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="danger"
					size="sm"
				/>
				Ditolak
			</div>
			)
		} else if (PeminjamanList[index].status === 2) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="success"
					size="sm"
				/>
				Disetujui
			</div>
			)
		} else if (PeminjamanList[index].status === 3) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="info"
					size="sm"
				/>
				Sudah Diambil
			</div>
			)
		} else if (PeminjamanList[index].status === 4) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="info"
					size="sm"
				/>
				Sudah Dikembalikan
			</div>
			)
		} else {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="danger"
					size="sm"
				/>
				Overdue
			</div>
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
									<TableCell>Judul Buku</TableCell>
									<TableCell>Tanggal Peminjaman</TableCell>
									<TableCell>Tanggal Pengembalian</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Aksi</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{PeminjamanList.slice(0, rowsPerPage).map(peminjaman => (
									<TableRow
										className={classes.tableRow}
										hover
										key={peminjaman.id}
									>
										<TableCell>{PeminjamanList.indexOf(peminjaman) + 1}</TableCell>
										<TableCell>{peminjaman.nama_buku}</TableCell>
										<TableCell>{peminjaman.tanggal_peminjaman}</TableCell>
										<TableCell>{peminjaman.tanggal_pengembalian}</TableCell>
										<TableCell>{statusOption(PeminjamanList.indexOf(peminjaman))}</TableCell>
										<TableCell>
											<VisibilityIcon />
											<CreateIcon />
											<DeleteIcon />
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
					count={PeminjamanList.length}
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