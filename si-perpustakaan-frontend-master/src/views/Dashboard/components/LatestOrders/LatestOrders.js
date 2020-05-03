import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import Color from 'theme/palette'
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Button,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { StatusBullet } from 'components';
import ComponentService from '../ComponentService'

const useStyles = makeStyles(theme => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 800
	},
	statusContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	status: {
		marginRight: theme.spacing(1)
	},
	actions: {
		justifyContent: 'flex-end'
	},
	btn: {
		color: "#6C987B"
	}
}));

const statusColors = {
	Overdue: 'danger'
};

const LatestOrders = props => {
	const { className, ...rest } = props;

	const classes = useStyles();
	const [data, setData] = useState({})
	const [peminjamanList, setPeminjamanList] = useState([])
	const [judulBuku, setJudulBuku] = useState([])
	const [namaPeminjam, setNamaPeminjam] = useState([])

	useEffect(() => refreshPeminjamanList())

	const refreshPeminjamanList = () => {
		ComponentService.getBeranda()
			.then(response => {
				setData(response.data)
				setPeminjamanList(response.data.peminjaman)
			})
	}

	const getNamaPeminjam = (index) => {
		return data.nama_peminjam[index]
	}

	const getNamaBuku = (index) => {
		return data.nama_buku[index].judul
	}


	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<CardHeader
				title="DATA KETERLAMBATAN PENGEMBALIAN BUKU"
				style={{ textAlign: 'center' }}
			/>
			<Divider />
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>No.</TableCell>
									{/* <TableCell>ID Peminjaman</TableCell> */}
									<TableCell>Nama Peminjam</TableCell>
									<TableCell>Judul Buku</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Jumlah Hari</TableCell>
									<TableCell>Jumlah Denda</TableCell>
								</TableRow>

							</TableHead>
							<TableBody>
								{peminjamanList.map(peminjaman => (
									<TableRow
										hover
										key={peminjaman.id}
									>
										<TableCell>{peminjamanList.indexOf(peminjaman) + 1}</TableCell>
										<TableCell>{getNamaPeminjam(peminjamanList.indexOf(peminjaman))}</TableCell>
										<TableCell>{getNamaBuku(peminjamanList.indexOf(peminjaman))}</TableCell>
										<TableCell>
											<div className={classes.statusContainer}>
												<StatusBullet
													className={classes.status}
													color="danger"
													size="sm"
												/>
												Overdue
											</div>
										</TableCell>
										<TableCell>{peminjaman.jumlah_hari}</TableCell>
										<TableCell>Rp {peminjaman.denda}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</PerfectScrollbar>
			</CardContent>
			<Divider />
			<CardActions className={classes.actions}>
				<Button
					className={classes.btn}
					size="small"
					variant="text"
				>
					Lihat Semua <ArrowRightIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

LatestOrders.propTypes = {
	className: PropTypes.string
};

export default LatestOrders;
