import {link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold
      my-7'> Sign Up</h1>
      <form className='flex flex-col  gap-4'>
        <input type="text" placeholder='Username' 
        id='username' className='bg-slate-100 p-3
        rounded-lg'/>
        <input type="email" placeholder='email' 
        id='email' className='bg-slate-100 p-3
        rounded-lg'/>
        <input type="password" placeholder='password' 
        id='password' className='bg-slate-100 p-3
        rounded-lg'/>hover
       <button className='bg-slate-700 text-white p-3
       rounded-lg uppercase :opacity-95
       disabled:opacity-80'> Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
      <P>Have an account?</P>
        <link to='/sign-in'>
        <span className='text-blue-500'> Signin</span>
        </link>
      </div>
    </div>
  );
}
