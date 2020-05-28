import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { getAxios } from 'utils';
import { withCookies } from 'react-cookie';
import useAxios from "axios-hooks";
import ComponentService from './components/ComponentService'

import {
	TotalPengadaan,
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
	const { allCookies } = props;
	
	const [{ data: dashboardData, loading, error }, refetch] = useAxios(
		getAxios(ComponentService.getBeranda(), allCookies.user.jwttoken)
	);

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
					<TotalUsers />
				</Grid>
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalPengadaan />
				</Grid>
				<Grid
					item
					lg={4}
					sm={12}
					xl={4}
					xs={12}
				>
					<TotalBuku />
				</Grid>
				{/* <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid> */}
				<Grid
					item
					lg={12}
					md={12}
					xl={12}
					xs={12}
				>
					<LatestOrders 
						refetch={refetch}
						dashboardData={dashboardData}
						loading={loading}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default withCookies(Dashboard);