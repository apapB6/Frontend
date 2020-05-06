import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Grid,
	Button,
	TextField,
	colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {},
	btn: {
		background: '#5E9A78',
		color: '#FFFFFF'
	}
}));

const PengadaanForm = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

		return (
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		>
			<form
				autoComplete="off"
				noValidate
			>
				<CardHeader
					title="Tambah Data Pengadaan"
				/>
				<Divider />
				<CardContent>
					<Grid
						container
						spacing={3}
					>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Judul Buku"
								margin="dense"
								name="judul"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Nama Pengarang"
								margin="dense"
								name="pengarang"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Nama Penerbit"
								margin="dense"
								name="penerbit"
								onChange={handleChange}
								required
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Jumlah"
								margin="dense"
								name="jumlah"
								onChange={handleChange}
								required
								type="number"
								variant="outlined"
							/>
						</Grid>
						<Grid
							item
							md={12}
							xs={12}
						>
							<TextField
								fullWidth
								label="Harga"
								margin="dense"
								name="harga"
								onChange={handleChange}
								required
								type="number"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<Button
						className={classes.btn}
						variant="contained"
					>
						SIMPAN
          </Button>
				</CardActions>
			</form>
		</Card>
	);
};

PengadaanForm.propTypes = {
	className: PropTypes.string
};

export default PengadaanForm;
