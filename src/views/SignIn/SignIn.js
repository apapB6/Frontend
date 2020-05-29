import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
	Grid,
	Button,
	IconButton,
	TextField,
	Link,
	Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import ComponentService from './ComponentService'

import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

const schema = {
	email: {
		presence: { allowEmpty: false, message: 'is required' },
		email: true,
		length: {
			maximum: 64
		}
	},
	password: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 128
		}
	}
};

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		height: '100%'
	},
	grid: {
		height: '100%'
	},
	quoteContainer: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	quote: {
		backgroundColor: '#DEE8E2',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundImage: 'url(/images/auth.png)',
		backgroundSize: 'fit',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	quoteInner: {
		textAlign: 'center',
		flexBasis: '600px'
	},
	quoteText: {
		color: theme.palette.white,
		fontWeight: 300
	},
	name: {
		marginTop: theme.spacing(3),
		color: theme.palette.white
	},
	bio: {
		color: theme.palette.white
	},
	contentContainer: {},
	content: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	contentHeader: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: theme.spacing(5),
		paddingBototm: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	},
	logoImage: {
		marginLeft: theme.spacing(4)
	},
	contentBody: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center'
		}
	},
	form: {
		paddingLeft: 100,
		paddingRight: 100,
		paddingBottom: 125,
		flexBasis: 700,
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2)
		}
	},
	title: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(5),
		textAlign: 'center'
	},
	socialButtons: {
		marginTop: theme.spacing(3)
	},
	socialIcon: {
		marginRight: theme.spacing(1)
	},
	sugestion: {
		marginTop: theme.spacing(2)
	},
	textField: {
		marginTop: theme.spacing(2),
		outlineColor: theme.palette.background.toolbar
	},
	signInButton: {
		margin: theme.spacing(5, 0),
		backgroundColor: theme.palette.background.toolbar,
		color: '#FFFFFF'
	}
}));

const SignIn = props => {
	const { history } = props;
	const mainHistory = useHistory()
	const classes = useStyles();
	const [postLoading, setPostLoading] = useState(false)

	// const [user, setUser] = useCookies(['user']);

	const [dataState, setDataState] = useState({
		username: '',
		password: ''
	})

	const [error, setError] = useState({
		isValid: false,
		username: false,
		password: false,
		message: ''
	})

	const [formState, setFormState] = useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {},
		outlineColor: "#5E9A78"
	});

	const onFocus = () => {
		setFormState({
			outlineColor: "#5E9A78"
		});
	};

	const onHover = () => {
		setFormState({
			outlineColor: "#5E9A78"
		});
	};

	// useEffect(() => {
	// 	const errors = validate(formState.values, schema);

	// 	setFormState(formState => ({
	// 	  ...formState,
	// 	  isValid: errors ? false : true,
	// 	  errors: errors || {}
	// 	}));
	//   }, [formState.values]);

	const handleBack = () => {
		history.goBack();
	};

	const handleChange = (field, event) => {
		setDataState({
			...dataState,
			[field]: event.target.value
		})
		setError({
			...error,
			username: false,
			password: false,
			isValid: error.password !== '' && error.username !== '' ? true : false
		})
	};

	const validation = () => {
		// localStorage.setItem('isLogin', true)
		// window.location.reload()
		// mainHistory.push('/dashboard')
		setPostLoading(true)
		axios.post(ComponentService.getAuth(), {
			username: dataState.username,
			password: dataState.password
		}).then(response => {
			setPostLoading(false)
			// setUser('user', response.data, { path: '/' })
			Cookies.set('user', response.data, { expires: 7, path: '/' })
			window.location.reload()
			mainHistory.push('/dashboard')
		}).catch(err => {
			setPostLoading(false)
			setError({
				username: true,
				password: true,
				message: 'Username atau Password salah',
				isValid: false
			})
		})
	}

	return (
		<div className={classes.root}>
			<Grid
				className={classes.grid}
				container
			>
				<Grid
					className={classes.quoteContainer}
					item
					lg={6}
				>
					<div className={classes.quote}>
					</div>
				</Grid>
				<Grid
					className={classes.content}
					item
					lg={6}
					xs={12}
				>
					<div className={classes.content}>
						<div className={classes.contentBody}>
							<form
								className={classes.form}
							// onSubmit={handleSignIn}
							>
								<Typography
									className={classes.title}
									variant="h2"
								>
									Selamat Datang!
                				</Typography>
								<TextField
									className={classes.textField}
									fullWidth
									label="Username"
									name="email"
									type="text"
									variant="outlined"
									onFocus={() => onFocus()}
									onHover={() => onHover()}
									onChange={e => handleChange('username', e)}
									value={dataState.username || ''}
									style={{ outlineColor: formState.outlineColor }}
								/>
								<TextField
									className={classes.textField}
									fullWidth
									error={error.password}
									helperText={
										error.message !== '' && !error.isValid ? error.message : ''
									}
									label="Kata Sandi"
									name="password"
									type="password"
									onChange={e => handleChange('password', e)}
									variant="outlined"
									value={dataState.password || ''}
									onFocus={() => onFocus()}
									onHover={() => onHover()}
									style={{ outlineColor: formState.outlineColor }}
								/>
								<Button
									className={classes.signInButton}
									fullWidth
									disabled={!error.isValid || postLoading}
									size="large"
									type="submit"
									variant="contained"
									onClick={validation}
								>
									{postLoading ? <CircularProgress color="inherit" size={20} /> : 'MASUK'}
								</Button>
							</form>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

SignIn.propTypes = {
	history: PropTypes.object
};

export default withRouter(SignIn);
