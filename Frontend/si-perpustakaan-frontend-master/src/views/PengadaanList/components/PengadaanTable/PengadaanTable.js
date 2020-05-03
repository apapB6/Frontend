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
import PengadaanListService from './PengadaanListService';
import { StatusBullet } from 'components'

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
	status: {
		marginRight: theme.spacing(1)
	}
}));

const PengadaanTable = props => {
	const { className, users, ...rest } = props;

	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
	const [pengadaanList, setPengadaanList] = useState([]);

	useEffect(() => {
		refreshPengadaan()
	})

	const refreshPengadaan = () => {
		PengadaanListService.getAllPengadaan().then(response => setPengadaanList(response.data))
	}

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	const handleRowsPerPageChange = event => {
		setRowsPerPage(event.target.value);
	};

	const statusOption = (index) => {
		if (pengadaanList[index].status === 0) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="info"
					size="sm"
				/>
				Usulan Pengguna
			</div>
			)
		} else if (pengadaanList[index].status === 1) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="info"
					size="sm"
				/>
				Menunggu Persetujuan
			</div>
			)
		} else if (pengadaanList[index].status === 2) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="danger"
					size="sm"
				/>
				Ditolak
			</div>
			)
		} else {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="success"
					size="sm"
				/>
				Disetujui
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
									<TableCell>Jumlah</TableCell>
									<TableCell>Harga</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Aksi</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{pengadaanList.slice(0, rowsPerPage).map(pengadaan => (
									<TableRow
										className={classes.tableRow}
										hover
										key={pengadaan.id}
									>
										<TableCell>{pengadaanList.indexOf(pengadaan) + 1}</TableCell>
										<TableCell>{pengadaan.judul}</TableCell>
										<TableCell>
											{pengadaan.jumlah}
										</TableCell>
										<TableCell>Rp {pengadaan.harga}</TableCell>
										<TableCell>{statusOption(pengadaanList.indexOf(pengadaan))}</TableCell>
										<TableCell>
											<VisibilityIcon />
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
					count={pengadaanList.length}
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

PengadaanTable.propTypes = {
	className: PropTypes.string,
	users: PropTypes.array.isRequired
};

export default PengadaanTable;
