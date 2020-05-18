import React, { useReducer, useState } from 'react';

// utils
import { Api } from '../../util';

// styled components
import Container from './style';

const reducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
      case 'SET_VALUE':
         return { ...state, form: { ...state.form, [payload.name]: payload.value } };

      default:
         return state;
   }
};

const initialState = {
   form: {
      email: '',
      password: ''
   }
};

const Login = props => {
   console.log(props);
   const { history } = props;
   const [state, dispatch] = useReducer(reducer, initialState);
   const [serverErr, setServerErr] = useState('');

   const onChange = event => {
      const { name, value } = event.target;
      dispatch({ type: 'SET_VALUE', payload: { name, value } });
   };

   const onSubmit = async () => {
      const res = await Api.login(state.form);
      if (res.err) return setServerErr(res.err);
      history.push('/');
   };

   return (
      <Container>
         <div class='container'>
            <div>
               <div class='row'>
                  <h2>Login with Social Media or Manually</h2>
                  <div class='vl'>
                     <span class='vl-innertext'>or</span>
                  </div>

                  <div class='col'>
                     <a href='#' class='fb btn'>
                        <i class='fa fa-facebook fa-fw'></i> Login with Facebook
                     </a>
                     <a href='#' class='twitter btn'>
                        <i class='fa fa-twitter fa-fw'></i> Login with Twitter
                     </a>
                     <a href='#' class='google btn'>
                        <i class='fa fa-google fa-fw'></i> Login with Google+
                     </a>
                  </div>

                  <div class='col'>
                     <div class='hide-md-lg'>
                        <p>Or sign in manually:</p>
                     </div>

                     <input type='text' name='email' onChange={onChange} placeholder='Username' />
                     <input type='password' name='password' onChange={onChange} placeholder='Password' />
                     <input type='submit' value='Login' onClick={onSubmit} />
                  </div>
               </div>
            </div>
         </div>

         <div class='bottom-container'>
            <div class='row'>
               <div class='col'>
                  <a href='#' class='btn'>
                     Sign up
                  </a>
               </div>
               <div class='col'>
                  <a href='#' class='btn'>
                     Forgot password?
                  </a>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Login;
