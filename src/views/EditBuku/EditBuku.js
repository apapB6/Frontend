import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { BukuToolbar, BukuEdit, BukuDetails } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		height: '100%',
		alignItems: 'stretch'
	}
}));

const EditBuku = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={4}
				alignItems="stretch"
			>
				<Grid
					item
					lg={12}
					md={12}
					xl={12}
					xs={12}
				>
					<BukuToolbar />
				</Grid>
				<Grid
					item
					lg={4}
					md={4}
					xl={4}
					xs={12}
					style={{ height: '100%' }}
				>
					<BukuEdit className={classes.content} />
				</Grid>
				<Grid
					item
					lg={8}
					md={8}
					xl={8}
					xs={12}
				>
					<BukuDetails />
				</Grid>
			</Grid>
		</div>
	);
};

export default EditBuku;
