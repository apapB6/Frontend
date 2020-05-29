import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import Cookies from 'js-cookie'
import {
	Card,
	CardActions,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TablePagination
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { StatusBullet } from 'components';
import BukuListService from './BukuListService';

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
	img: {
		maxWidth: 40,
		height: 'auto'
	}
}));

const imgUrl = '/images/avatars/buku.png'

const statusColors = {
	tersedia: 'success',
	kosong: 'danger'
};

const BukuTable = props => {
	const { className, users, ...rest } = props;

	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
	const [BukuList, setBukuList] = useState([]);

	useEffect(() => {
		refreshBuku()
	}, [])

	const refreshBuku = () => {
		BukuListService.getAllBuku().then(response => setBukuList(response.data))
	}

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	const handleRowsPerPageChange = event => {
		setRowsPerPage(event.target.value);
	};

	const statusOption = (index) => {
		if (BukuList[index].jumlah < 1) {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="danger"
					size="sm"
				/>
				Kosong
			</div>
			)
		} else {
			return (<div>
				<StatusBullet
					className={classes.status}
					color="success"
					size="sm"
				/>
				Tersedia
			</div>
			)
		}
	}

	const btnEdit = (id) => {
		if(JSON.parse(Cookies.get('user')).role === 5){
			return(
				<RouterLink to={`/buku/edit/${id}`}>
					<CreateIcon style={{ color: '#000000' }} />
				</RouterLink>
			)
		}
	}

	const btnDelete = (id) => {
		if(JSON.parse(Cookies.get('user')).role === 5){
			return(
				<RouterLink to={`/buku/delete/${id}`}>
					<DeleteIcon style={{ color: '#000000' }} />
				</RouterLink>
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
									<TableCell>Gambar</TableCell>
									<TableCell width="20%">Judul</TableCell>
									<TableCell>Pengarang</TableCell>
									<TableCell width="20%">Penerbit</TableCell>
									<TableCell>Jumlah</TableCell>
									<TableCell>Status</TableCell>
									<TableCell style={{ textAlign: 'center' }}>Aksi</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{BukuList.slice(0, rowsPerPage).map(buku => (
									<TableRow
										className={classes.tableRow}
										hover
										key={buku.id}
									>
										<TableCell>{BukuList.indexOf(buku) + 1}</TableCell>
										<TableCell>
											<img
												src={imgUrl}
												className={classes.img}
											></img>
										</TableCell>
										<TableCell width="20%">{buku.judul}</TableCell>
										<TableCell>{buku.pengarang}</TableCell>
										<TableCell width="20%">{buku.penerbit}</TableCell>
										<TableCell>{buku.jumlah}</TableCell>
										<TableCell>{statusOption(BukuList.indexOf(buku))}</TableCell>
										<TableCell>
											<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
												<RouterLink to={`/buku/${buku.id}`}>
													<VisibilityIcon style={{ color: '#000000' }} />
												</RouterLink>
												{ btnEdit(buku.id) }
												{ btnDelete(buku.id) }
											</div>
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
					count={BukuList.length}
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

BukuTable.propTypes = {
	className: PropTypes.string,
	users: PropTypes.array.isRequired
};

export default BukuTable;
