import { useState } from 'react';
import api from '../api';

export default function AdminLogin(){
 const [form,setForm]=useState({email:'',password:''}); const [error,setError]=useState('');
 async function submit(e){e.preventDefault();setError('');try{const data=await api.login(form);localStorage.setItem('gai_token',data.token);window.location.href='/admin';}catch(e){setError(e.message)}}
 return <div style={{maxWidth:420,margin:'120px auto',padding:30}}><h1>GAI Admin Login</h1><form onSubmit={submit}>
 <input required placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{display:'block',width:'100%',padding:12,margin:'10px 0'}}/>
 <input required placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} style={{display:'block',width:'100%',padding:12,margin:'10px 0'}}/>
 {error&&<p>{error}</p>}<button type="submit" className="btn btn-primary">Login</button></form></div>
}