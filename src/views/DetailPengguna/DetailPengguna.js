import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PenggunaToolbar, PenggunaDetail } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const DetailPengguna = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PenggunaToolbar />
			<div className={classes.content}>
				<PenggunaDetail />
			</div>
		</div>
	);
};

export default DetailPengguna;
