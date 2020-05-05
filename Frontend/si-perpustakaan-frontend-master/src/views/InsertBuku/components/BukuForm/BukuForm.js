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

const BukuForm = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [values, setValues] = useState({
		firstName: 'Shen',
		lastName: 'Zhi',
		email: 'shen.zhi@devias.io',
		phone: '',
		state: 'Alabama',
		country: 'USA'
	});

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	const jenisBuku = [
		{
			value: 1,
			label: 'Karya Tulis'
		},
		{
			value: 2,
			label: 'Majalah/Koran'
		},
		{
			value: 3,
			label: 'Cerita/Novel'
		},
		{
			value: 4,
			label: 'Buku Ajar'
		},
		{
			value: 5,
			label: 'Lainnya'
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
				<CardHeader
					title="Tambah Data Buku"
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
								label="Jenis Buku"
								margin="dense"
								name="id_jenis_buku"
								onChange={handleChange}
								required
								select
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								variant="outlined"
							>
								{jenisBuku.map(option => (
									<option
										key={option.value}
										value={option.value}
									>
										{option.label}
									</option>
								))}
							</TextField>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<Button
						className={classes.btn}
						variant="contained"
					>
						Save details
          </Button>
				</CardActions>
			</form>
		</Card>
	);
};

BukuForm.propTypes = {
	className: PropTypes.string
};

export default BukuForm;
