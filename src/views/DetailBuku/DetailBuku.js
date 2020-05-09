import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { BukuToolbar, BukuDetail } from './components';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	}
}));

const DetailBuku = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BukuToolbar />
			<div className={classes.content}>
				<BukuDetail />
			</div>
		</div>
	);
};

export default DetailBuku;
