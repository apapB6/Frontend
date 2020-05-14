import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { PeminjamanToolbar, PeminjamanEdit, PeminjamanDetails } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const EditPeminjaman = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={4}
			>
				<Grid
					item
					lg={12}
					md={12}
					xl={12}
					xs={12}
				>
					<PeminjamanToolbar />
				</Grid>
					<Grid
						item
						lg={12}
						md={6}
						xl={4}
						xs={12}
					>
						<div className={classes.content}>
							<PeminjamanEdit />
						</div>
					</Grid>
					<Grid
						item
						lg={12}
						md={6}
						xl={8}
						xs={12}
					>
						<PeminjamanDetails />
					</Grid>
			</Grid>
		</div>
	);
};

export default EditPeminjaman;
