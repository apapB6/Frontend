import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import UserListService from './UserListService';

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
	}
}));

const UsersTable = props => {
	const { className, users, ...rest } = props;

	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
	const [UserList, setUserList] = useState([]);

	useEffect(() => {
		refreshUser()
	})

	const refreshUser = () => {
		UserListService.getAllUser().then(response => setUserList(response.data))
	}

	const handlePageChange = (event, page) => {
		setPage(page);
	};

	const handleRowsPerPageChange = event => {
		setRowsPerPage(event.target.value);
	};

	const imgUrl = '/images/avatars/social.png'

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
									<TableCell>Foto</TableCell>
									<TableCell>NIP</TableCell>
									<TableCell>Nama</TableCell>
									<TableCell>Nomor Telepon</TableCell>
									<TableCell style={{ textAlign: 'center' }}>Aksi</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{UserList.slice(0, rowsPerPage).map(user => (
									<TableRow
										className={classes.tableRow}
										hover
										key={user.id}
									>
										<TableCell>{UserList.indexOf(user) + 1}</TableCell>
										<TableCell>
											<Avatar
												src={imgUrl}
												className={classes.img}
											></Avatar>
										</TableCell>
										<TableCell>{user.nip}</TableCell>
										<TableCell>{user.nama}</TableCell>
										<TableCell>{user.telepon}</TableCell>
										<TableCell>
											<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
												<RouterLink to={`/pengguna/detail/${user.id}`}>
													<VisibilityIcon style={{ color: '#000000' }} />
												</RouterLink>
												<CreateIcon />
												<DeleteIcon />
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
					count={UserList.length}
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

UsersTable.propTypes = {
	className: PropTypes.string,
	users: PropTypes.array.isRequired
};

export default UsersTable;
