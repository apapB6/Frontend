import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PenggunaToolbar, PenggunaForm } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const InsertPengguna = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PenggunaToolbar />
			<div className={classes.content}>
				<PenggunaForm />
			</div>
		</div>
	);
};

export default InsertPengguna;
