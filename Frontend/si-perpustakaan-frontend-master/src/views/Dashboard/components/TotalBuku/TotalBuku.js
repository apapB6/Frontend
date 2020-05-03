import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	Avatar,
	LinearProgress
} from '@material-ui/core';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ComponentService from '../ComponentService'

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%'
	},
	content: {
		alignItems: 'center',
		display: 'flex'
	},
	title: {
		fontWeight: 700
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		height: 56,
		width: 56
	},
	icon: {
		height: 32,
		width: 32
	},
	difference: {
		marginTop: theme.spacing(2),
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		borderTop: '0.5px solid #BBBBBB',
		paddingTop: '10px'
	},
	differenceIcon: {
		color: theme.palette.background.toolbar
	}
}));

const TotalBuku = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [totalBuku, setTotalBuku] = useState(0);

	useEffect(() => refreshTotalBuku())

	const refreshTotalBuku = () => {
		ComponentService.getAllBuku().then(response => setTotalBuku(response.data.length))
	}

	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<CardContent>
				<Grid
					container
					justify="space-between"
				>
					<Grid item>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
							variant="body2"
						>
							TOTAL BUKU
            </Typography>
						<Typography variant="h3">{totalBuku}</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<CollectionsBookmarkIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
				<div className={classes.difference}>
					<NavigateNextIcon className={classes.differenceIcon} />
					<a href="/buku">
						<Typography
							className={classes.caption}
							variant="caption"
						>
							Lihat Selengkapnya
          			</Typography>
					</a>
				</div>
			</CardContent>
		</Card>
	);
};

TotalBuku.propTypes = {
	className: PropTypes.string
};

export default TotalBuku;
