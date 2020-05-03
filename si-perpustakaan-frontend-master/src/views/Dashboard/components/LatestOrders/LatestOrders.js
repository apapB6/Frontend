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

import mockData from './data';
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
	const [peminjamanList, setPeminjamanList] = useState([])

	useEffect(() => refreshPeminjamanList())

	const refreshPeminjamanList = () => {
		ComponentService.getAllPeminjaman().then(response => {
			const peminjamanOverdue = response.data.filter(peminjaman => peminjaman.status === 5)
			console.log(peminjamanOverdue)
		})
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
								{/* {peminjamanList.map(peminjaman => (
									<TableRow
										hover
										key={peminjaman.id}
									>
										<TableCell>{peminjamanList.indexOf(peminjaman) + 1}</TableCell>
										<TableCell>Ani</TableCell>
										<TableCell>{judul}</TableCell>
										<TableCell>
											<div className={classes.statusContainer}>
												<StatusBullet
													className={classes.status}
													color={statusColors[order.status]}
													size="sm"
												/>
												{order.namaStatus}
											</div>
										</TableCell>
										<TableCell>{order.customer.jumlah_hari}</TableCell>
										<TableCell>{order.customer.jumlah_denda}</TableCell>
									</TableRow>
								))} */}
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
