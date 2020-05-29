import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Cookies from 'js-cookie'

import {
	TotalPengadaan,
	TotalPeminjaman,
	TotalUsers,
	TotalBuku,
	LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	}
}));

const Dashboard = (props) => {
	const classes = useStyles();

	const viewAccess = () => {
		if (JSON.parse(Cookies.get('user')).role === 5) {
			return (
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalUsers />
				</Grid>
			)
		} else {
			return (
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalPeminjaman />
				</Grid>
			)
		}
	}

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={4}
			>
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalPengadaan />
				</Grid>
				{viewAccess()}
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalBuku />
				</Grid>
				<Grid
					item
					lg={12}
					md={12}
					xl={12}
					xs={12}
				>
					<LatestOrders />
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;