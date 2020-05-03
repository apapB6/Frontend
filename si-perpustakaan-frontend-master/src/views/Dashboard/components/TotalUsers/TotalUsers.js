import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
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
		backgroundColor: theme.palette.success.main,
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
		color: theme.palette.success.dark
	},
	differenceValue: {
		color: theme.palette.success.dark,
		marginRight: theme.spacing(1)
	}
}));

const TotalUsers = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [totalUser, setTotalUser] = useState(0);

	useEffect(() => refreshTotalUser())

	const refreshTotalUser = () => {
		ComponentService.getAllUser().then(response => setTotalUser(response.data.length))
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
							TOTAL PENGGUNA
            </Typography>
						<Typography variant="h3">{totalUser}</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<PeopleIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
				<div className={classes.difference}>
					<NavigateNextIcon className={classes.differenceIcon} />
					<a href="users">
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

TotalUsers.propTypes = {
	className: PropTypes.string
};

export default TotalUsers;
