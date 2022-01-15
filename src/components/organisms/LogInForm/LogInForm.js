import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from 'services/authService';
import { login } from 'store';
import FormField from 'components/molecules/FormField/FormField';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const logIn = async ({ email, password }) => {
    console.log(email, password);
    const auth = await signIn(email, password);
    if (auth) {
      dispatch(login(auth));
    }
  };

  return (
    <form onSubmit={handleSubmit(logIn)}>
      <FormField
        label="email"
        name="email"
        id="email"
        type="email"
        {...register('email', { require: true })}
      />
      {errors.email && <span>Email jest wymagany</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { require: true })}
      />
      {errors.password && <span>Hasło jest wymagane</span>}
      <button type="submit">Zaloguj</button>
    </form>
  );
};

export default LogInForm;
