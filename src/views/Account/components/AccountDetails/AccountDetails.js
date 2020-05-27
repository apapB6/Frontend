import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	Avatar,
	CardContent,
	CardActions,
	Divider,
	Grid,
	Button,
	TextField,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
	},
	avatar: {
		position: "relative",
		width: "80px",
		height: "80px",
		left: "50%",
		transform: "translateX(-50%)",
		marginBottom: "10px"
	},
	username: {
		textAlign: "center",
		marginBottom: "25px"
	},
	header: {
		padding: "10px 0"
	}
}));

const AccountDetails = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [values, setValues] = useState({
		nama: 'Ira',
		nip: '1806269801',
		tempat_lahir: 'Jakarta',
		tanggal_lahir: '1996-02-01',
		alamat: 'Serang',
		telepon: '081234567890',
		username: 'irakuyz',
		avatar: '/images/avatars/avatar_11.png'
	});

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const states = [
		{
			value: 'alabama',
			label: 'Alabama'
		},
		{
			value: 'new-york',
			label: 'New York'
		},
		{
			value: 'san-francisco',
			label: 'San Francisco'
		}
	];

	return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<form
				autoComplete="off"
				noValidate
			>
				<CardContent>
					<Avatar
						className={classes.avatar}
						src={values.avatar}
					/>
					<Typography variant="h4" className={classes.username}>
						{values.username}
					</Typography>
					<Grid
						container
						spacing={3}
					>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="Nama"
								margin="dense"
								name="nama"
								onChange={handleChange}
								value={values.nama}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="NIP"
								margin="dense"
								name="nip"
								onChange={handleChange}
								value={values.nip}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="Tempat Lahir"
								margin="dense"
								name="tempat_lahir"
								onChange={handleChange}
								value={values.tempat_lahir}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="Tanggal Lahir"
								margin="dense"
								name="tanggal_lahir"
								onChange={handleChange}
								type="date"
								value={values.tanggal_lahir}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="Alamat"
								margin="dense"
								name="alamat"
								onChange={handleChange}
								value={values.alamat}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
						<Grid
							item
							md={6}
							xs={12}
						>
							<TextField
								fullWidth
								label="Telepon"
								margin="dense"
								name="telepon"
								onChange={handleChange}
								value={values.telepon}
								variant="outlined"
								disabled={true}
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<RouterLink to="/">
						<Button
							style={{ backgroundColor: '#6C987B', color: '#FFFFFF' }}
							variant="contained"
						>
							Kembali
          			</Button>
					</RouterLink>
				</CardActions>
			</form>
		</Card>
	);
};

AccountDetails.propTypes = {
	className: PropTypes.string
};

export default AccountDetails;
