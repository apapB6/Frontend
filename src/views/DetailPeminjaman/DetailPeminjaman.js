import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PeminjamanToolbar, PeminjamanDetail } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const DetailPeminjaman = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PeminjamanToolbar />
			<div className={classes.content}>
				<PeminjamanDetail />
			</div>
		</div>
	);
};

export default DetailPeminjaman;
