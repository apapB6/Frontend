import React, { useState, useEffect } from 'react';
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
import ComponentService from '../ComponentService'

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

	const [values, setValues] = useState({});

	const [avatar, setAvatar] = useState('/images/avatars/avatar_11.png')

	useEffect(() => {
		refreshProfile()
	}, [])

	const refreshProfile = () => {
		ComponentService.getProfile().then(response => setValues(response.data))
	}

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
						src={avatar}
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
								InputLabelProps={{ shrink: true }}
								margin="dense"
								name="nama"
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
								InputLabelProps={{ shrink: true }}
								margin="dense"
								name="nip"
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
								InputLabelProps={{ shrink: true }}
								name="tempat_lahir"
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
								InputLabelProps={{ shrink: true }}
								name="tanggal_lahir"
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
								InputLabelProps={{ shrink: true }}
								name="alamat"
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
								InputLabelProps={{ shrink: true }}
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
