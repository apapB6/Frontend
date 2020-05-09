import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PengadaanToolbar, PengadaanForm } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const InsertPengadaan = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<PengadaanToolbar />
			<div className={classes.content}>
				<PengadaanForm />
			</div>
		</div>
	);
};

export default InsertPengadaan;
