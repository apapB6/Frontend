import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
	root: {},
	row: {
		height: '42px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: theme.spacing(1)
	},
	spacer: {
		flexGrow: 1
	},
	importButton: {
		marginRight: theme.spacing(1)
	},
	exportButton: {
		marginRight: theme.spacing(1)
	},
	btn: {
		background: "#6C987B",
		color: "#FFFFFF"
	}
}));

const BukuToolbar = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div
			{...rest}
			className={clsx(classes.root, className)}
		>
			<div className={classes.row}>
				<Button
					variant="contained"
					className={classes.btn}
				>
					Tambah buku
        </Button>
			</div>
		</div>
	);
};

BukuToolbar.propTypes = {
	className: PropTypes.string
};

export default BukuToolbar;
