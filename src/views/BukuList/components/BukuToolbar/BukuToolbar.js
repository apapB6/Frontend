import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Cookies from 'js-cookie'

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

	const btnAdd = () => {
		if (JSON.parse(Cookies.get('user')).role === 5){
			return (
				<div className={classes.row}>
					<RouterLink to='/buku/add'>
						<Button
							variant="contained"
							className={classes.btn}
						>
							Tambah buku
						</Button>
					</RouterLink>
				</div>
			)
		}
	}

	return (
		<div
			{...rest}
			className={clsx(classes.root, className)}
		>
			{btnAdd()}
		</div>
	);
};

BukuToolbar.propTypes = {
	className: PropTypes.string
};

export default BukuToolbar;
