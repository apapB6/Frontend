import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { PeminjamanToolbar, PeminjamanEdit } from './components';

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
			<PeminjamanToolbar />
			<div className={classes.content}>
				<PeminjamanEdit />
			</div>
		</div>
	);
};

export default EditPeminjaman;
