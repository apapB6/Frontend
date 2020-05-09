import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { BukuToolbar, BukuForm } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const InsertBuku = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BukuToolbar />
			<div className={classes.content}>
				<BukuForm />
			</div>
		</div>
	);
};

export default InsertBuku;
